/*
Template Name: Dashonic - Admin & Dashboard Template
Author: Pichforest
Version: 1.0.0
Website: https://Pichforest.com/
Contact: Pichforest@gmail.com
File: Main Js File
*/


(function () {

    'use strict';

    function initLeftMenuCollapse() {
        var currentSIdebarSize = document.body.getAttribute('data-sidebar-size');
        window.onload = function () {
            if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
                document.body.setAttribute('data-sidebar-size', 'sm');
                updateRadio('sidebar-size-small')
            }
        }
        var verticalButton = document.getElementsByClassName("vertical-menu-btn");
        for (var i = 0; i < verticalButton.length; i++) {
            (function (index) {
                verticalButton[index] && verticalButton[index].addEventListener('click', function (event) {
                    event.preventDefault();
                    document.body.classList.toggle('sidebar-enable');
                    if (window.innerWidth >= 992) {
                        if (currentSIdebarSize == null) {
                            (document.body.getAttribute('data-sidebar-size') == null || document.body.getAttribute('data-sidebar-size') == "lg") ? document.body.setAttribute('data-sidebar-size', 'sm') : document.body.setAttribute('data-sidebar-size', 'lg')
                        } else if (currentSIdebarSize == "md") {
                            (document.body.getAttribute('data-sidebar-size') == "md") ? document.body.setAttribute('data-sidebar-size', 'sm') : document.body.setAttribute('data-sidebar-size', 'md')
                        } else {
                            (document.body.getAttribute('data-sidebar-size') == "sm") ? document.body.setAttribute('data-sidebar-size', 'lg') : document.body.setAttribute('data-sidebar-size', 'sm')
                        }
                    } else {
                        initMenuItemScroll();
                    }
                });
            })(i);
        }
    }

    function initActiveMenu() {

        setTimeout(function() {
            // === following js will activate the menu in left side bar based on url ====
            var menuItems = document.querySelectorAll("#sidebar-menu a");
            menuItems && menuItems.forEach(function (item) {
                var pageUrl = window.location.href.split(/[?#]/)[0];

                if (item.href == pageUrl) {
                    item.classList.add("active");
                    var parent = item.parentElement;
                    if (parent && parent.id !== "side-menu") {
                        parent.classList.add("mm-active");
                        var parent2 = parent.parentElement; // ul .
                        if (parent2 && parent2.id !== "side-menu") {
                            parent2.classList.add("mm-show"); // ul tag
                            if(parent2.classList.contains('mm-collapsing')) {
                                console.log('has mm-collapsing')
                            }
                            var parent3 = parent2.parentElement; // li tag
                            if (parent3 && parent3.id !== "side-menu") {
                                parent3.classList.add("mm-active"); // li
                                var parent4 = parent3.parentElement; // ul
                                if (parent4 && parent4.id !== "side-menu") {
                                    parent4.classList.add("mm-show"); // ul
                                    var parent5 = parent4.parentElement;
                                    if (parent5 && parent5.id !== "side-menu") {
                                        parent5.classList.add("mm-active"); // li
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }, 0)
    }

    function initComponents() {
        // tooltip
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });

        // popover
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        });

        // toast
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl)
        })
    }

    function initSettings() {
        // Feather Icons
        feather.replace();
        if (window.sessionStorage) {
            var alreadyVisited = sessionStorage.getItem("is_visited");
            if (!alreadyVisited) {
                sessionStorage.setItem("is_visited", "layout-direction-ltr");
            } else {
                var value = document.querySelector("#" + alreadyVisited);
                
            }
        }
    }


    function updateRadio(radioId) {
        if (document.getElementById(radioId))
            document.getElementById(radioId).checked = true;
    }

    function layoutSetting() {
        var body = document.body;
        document.getElementById('right-bar-toggle').addEventListener('click', function (e) {
            body.classList.toggle('right-bar-enabled');
        });

        body.addEventListener('click', function (e) {
            if(e.target.parentElement.classList.contains("right-bar-toggle-close")) {
                document.body.classList.remove('right-bar-enabled');
                return;
            } else if (e.target.closest('.right-bar-toggle, .right-bar')) {
                return;
            }
            document.body.classList.remove('right-bar-enabled');
            return;
        });
        var body = document.getElementsByTagName("body")[0];
        if (body.hasAttribute("data-layout") && body.getAttribute("data-layout") == "horizontal") {
            updateRadio('layout-horizontal');
            document.getElementById('sidebar-setting').style.display = "none";
        } else {
            updateRadio('layout-vertical');
        }
        
        // on layout change 
        document.querySelectorAll("input[name='layout'").forEach(function (input) {
            input.addEventListener("change", function (e) {
                if (e && e.target && e.target.value)
                    window.location.href = e.target.value == "vertical" ? "index.html" : "layouts-horizontal.html"
            });
        });

    }


    function init() {
        initSettings();
        initLeftMenuCollapse();
        initActiveMenu();
        initComponents();
        layoutSetting();
    }

    init();

})();


