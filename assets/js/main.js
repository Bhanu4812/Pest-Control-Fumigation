/* Shared interactions for the Pestora Shield template. */
(() => {
    "use strict";
    const root = document.documentElement,
        themeKey = "pestora-theme",
        dirKey = "pestora-direction";
    const savedTheme = localStorage.getItem(themeKey),
        savedDir = localStorage.getItem(dirKey);
    root.dataset.theme =
        savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    root.dir = savedDir || "ltr";
    const icons = {
        shield: /* HTML */ `
            <svg viewBox="0 0 32 32" aria-hidden="true">
                <path
                    d="M16 3 27 7v8c0 7-4.6 11.4-11 14-6.4-2.6-11-7-11-14V7l11-4Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                />
                <path
                    d="M10 17c5.5 0 9-2.8 12-7-1 7-4.3 11-10 12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        `,
        moon: /* HTML */ `
            <svg class="moon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M20 15.2A8.4 8.4 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                />
            </svg>
        `,
        sun: /* HTML */ `
            <svg class="sun" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2" />
                <path
                    d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        `,
        direction: /* HTML */ `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M4 8h13m0 0-3-3m3 3-3 3M20 16H7m0 0 3-3m-3 3 3 3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        `,
        menu: /* HTML */ `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        `,
        close: /* HTML */ `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M6 6l12 12M18 6 6 18"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        `,
    };
    const mobileIcons = {
        home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11 12 4l8 7v9h-5v-6H9v6H4v-9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
        about: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 11v6m0-10v.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        services: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>`,
        packages: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 8 8-4 8 4-8 4-8-4Zm0 0v9l8 4 8-4V8M12 12v9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
        safety: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v6c0 5-3.3 8.1-8 10-4.7-1.9-8-5-8-10V6l8-3Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m8.5 12 2.2 2.2 4.8-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        contact: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3V6Zm1 1 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
        user: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M6 20c.5-4 2.5-6 6-6s5.5 2 6 6H6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
    };
    const page = document.body.dataset.page || "",
        active = (n) => (page === n ? ' aria-current="page"' : ""),
        homeActive = ["home1", "home2"].includes(page) ? " active" : "";
    const brand = `
        <span class="logo-mark">
            ${icons.shield}
        </span>
    <span class="brand-copy logo-text">
        <span class="brand-name">Pestora Shield</span>
        <span class="brand-tag">Pest Control &amp; Fumigation</span>
    </span>
    `;
    const header = /* HTML */ `
        <header class="site-header">
            <div class="container nav-wrap">
                <a class="logo" href="homepage1.html" aria-label="Pestora Shield home">${brand}</a>
                <nav class="nav" id="site-nav" aria-label="Primary navigation">
                    <div class="mobile-drawer-header">
                        <a class="logo" href="homepage1.html" aria-label="Pestora Shield home">
                            ${brand}
                        </a>
                        <button class="mobile-nav-close" type="button" aria-label="Close navigation">
                            ${icons.close}
                        </button>
                    </div>
                    <div class="dropdown${homeActive}">
                        <button class="dropdown-toggle" type="button" aria-expanded="false">
                            <span class="mobile-nav-icon">${mobileIcons.home}</span>
                            Home
                            <span class="chevron"></span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="homepage1.html" ${active("home1")}>Home Page 1</a>
                            <a href="homepage2.html" ${active("home2")}>Home Page 2</a>
                        </div>
                    </div>
                    <a href="about.html" ${active("about")}><span class="mobile-nav-icon">${mobileIcons.about}</span>About</a>
                    <a href="services.html" ${active("services")}><span class="mobile-nav-icon">${mobileIcons.services}</span>Services</a>
                    <a href="packages.html" ${active("packages")}><span class="mobile-nav-icon">${mobileIcons.packages}</span>Packages</a>
                    <a href="chemical-safety.html" ${active("safety")}><span class="mobile-nav-icon">${mobileIcons.safety}</span>Chemical Safety</a>
                    <a href="contact.html" ${active("contact")}><span class="mobile-nav-icon">${mobileIcons.contact}</span>Contact</a>
                    <div class="mobile-nav-actions">
                        <a class="btn mobile-login" href="login.html">
                            <span class="mobile-action-icon">${mobileIcons.user}</span>
                            Login
                        </a>
                        <a class="btn btn-primary mobile-book" href="contact.html">Book a Visit</a>
                    </div>
                </nav>
                <div class="header-actions">
                    <button class="theme-toggle" type="button">${icons.moon}${icons.sun}</button>
                    <button
                        class="direction-toggle"
                        type="button"
                        aria-label="Switch to right-to-left layout"
                    >
                        ${icons.direction}
                    </button>
                    <a class="btn header-login" href="login.html">Login</a>
                    <a class="btn btn-primary header-book" href="contact.html">Book a Visit</a>
                    <button
                        class="menu-toggle"
                        type="button"
                        aria-controls="site-nav"
                        aria-expanded="false"
                        aria-label="Open navigation"
                    >
                        ${icons.menu}
                    </button>
                </div>
            </div>
        </header>
    `;
    const footer = /* HTML */ `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-grid">
                    <div>
                        <a class="logo" href="homepage1.html">${brand}</a>
                        <p>
                            Inspection-led pest control for homes and businesses, delivered with
                            careful application and clear guidance.
                        </p>
                        <div class="socials">
                            <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
                            <a href="https://www.instagram.com/" aria-label="Instagram">in</a>
                            <a href="https://www.linkedin.com/" aria-label="LinkedIn">li</a>
                        </div>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <div class="footer-links">
                            <a href="homepage1.html">Home</a>
                            <a href="about.html">About</a>
                            <a href="services.html">Services</a>
                            <a href="packages.html">Packages</a>
                            <a href="chemical-safety.html">Chemical Safety</a>
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h3>Our Services</h3>
                        <div class="footer-links">
                            <a href="services.html#cockroach">Cockroach Control</a>
                            <a href="services.html#termite">Termite Control</a>
                            <a href="services.html#bed-bug">Bed Bug Treatment</a>
                            <a href="services.html#mosquito">Mosquito Control</a>
                            <a href="services.html#rodent">Rodent Control</a>
                        </div>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <div class="footer-links">
                            <a href="tel:+910000000000">+91 00000 00000</a>
                            <a href="mailto:care@pestorashield.example">
                                care@pestorashield.example
                            </a>
                            <span>Mon–Sat: 8:00–18:00</span>
                            <span>Your city and nearby areas</span>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span>© 2026 Pestora Shield. All rights reserved.</span>
                    <div class="footer-legal">
                        <a href="contact.html">Privacy Policy</a>
                        <a href="contact.html">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
    const mount = (selector, html, position) => {
        const node = document.querySelector(selector);
        if (node) {
            node.insertAdjacentHTML(position, html);
            node.remove();
        }
    };
    mount("[data-header]", header, "afterend");
    mount("[data-footer]", footer, "beforebegin");
    const themeBtn = document.querySelector(".theme-toggle"),
        dirBtn = document.querySelector(".direction-toggle");
    const syncControls = () => {
        themeBtn?.setAttribute(
            "aria-label",
            root.dataset.theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        );
        dirBtn?.setAttribute(
            "aria-label",
            root.dir === "rtl"
                ? "Switch to left-to-right layout"
                : "Switch to right-to-left layout",
        );
        const label = dirBtn?.querySelector(".direction-label");
        if (label) label.textContent = root.dir === "rtl" ? "RTL" : "LTR";
    };
    syncControls();
    themeBtn?.addEventListener("click", () => {
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem(themeKey, root.dataset.theme);
        syncControls();
    });
    dirBtn?.addEventListener("click", () => {
        root.dir = root.dir === "rtl" ? "ltr" : "rtl";
        localStorage.setItem(dirKey, root.dir);
        syncControls();
    });
    const closeDropdowns = (except) =>
        document.querySelectorAll(".dropdown.open").forEach((d) => {
            if (d !== except) {
                d.classList.remove("open");
                d.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
            }
        });
    document.querySelectorAll(".dropdown-toggle").forEach((btn) =>
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const d = btn.closest(".dropdown"),
                open = !d.classList.contains("open");
            closeDropdowns(d);
            d.classList.toggle("open", open);
            btn.setAttribute("aria-expanded", String(open));
        }),
    );
    document.addEventListener("click", () => closeDropdowns());
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeDropdowns();
    });
    const menu = document.querySelector(".nav"),
        menuBtn = document.querySelector(".menu-toggle"),
        menuCloseBtn = document.querySelector(".mobile-nav-close");
    const closeMenu = () => {
        menu?.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
    };
    menuBtn?.addEventListener("click", () => {
        const open = !menu.classList.contains("open");
        menu.classList.toggle("open", open);
        menuBtn.setAttribute("aria-expanded", String(open));
        document.body.classList.toggle("no-scroll", open);
    });
    menuCloseBtn?.addEventListener("click", closeMenu);
    menu?.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
            closeMenu();
        }),
    );
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
    document.querySelectorAll(".faq-button").forEach((btn) =>
        btn.addEventListener("click", () => {
            const open = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!open));
            document
                .getElementById(btn.getAttribute("aria-controls"))
                ?.classList.toggle("open", !open);
        }),
    );
    document.querySelectorAll(".password-toggle").forEach((btn) =>
        btn.addEventListener("click", () => {
            const input = btn.parentElement.querySelector("input"),
                show = input.type === "password";
            input.type = show ? "text" : "password";
            btn.classList.toggle("is-visible", show);
            btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
        }),
    );
    const emailOK = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        phoneOK = (v) => v.replace(/\D/g, "").length >= 7;

    // Consistent, brand-colored select menus across browsers.
    document.querySelectorAll("select").forEach((select) => {
        if (select.closest(".custom-select")) return;
        const wrapper = document.createElement("div"),
            trigger = document.createElement("button"),
            menu = document.createElement("div");
        wrapper.className = "custom-select";
        trigger.className = "custom-select-trigger";
        trigger.type = "button";
        trigger.setAttribute("aria-haspopup", "listbox");
        trigger.setAttribute("aria-expanded", "false");
        menu.className = "custom-select-menu";
        menu.setAttribute("role", "listbox");
        select.parentNode.insertBefore(wrapper, select);
        wrapper.append(select, trigger, menu);
        select.classList.add("native-select-hidden");

        const sync = () => {
            const selected = select.options[select.selectedIndex];
            trigger.textContent = selected?.textContent || "Select an option";
            trigger.classList.toggle("is-placeholder", !select.value);
            menu.querySelectorAll("button").forEach((option, index) => {
                const active = index === select.selectedIndex;
                option.classList.toggle("is-selected", active);
                option.setAttribute("aria-selected", String(active));
            });
        };
        [...select.options].forEach((sourceOption, index) => {
            const option = document.createElement("button");
            option.type = "button";
            option.className = "custom-select-option";
            option.textContent = sourceOption.textContent;
            option.setAttribute("role", "option");
            option.disabled = sourceOption.disabled;
            option.addEventListener("click", () => {
                select.selectedIndex = index;
                select.dispatchEvent(new Event("change", { bubbles: true }));
                wrapper.classList.remove("open");
                trigger.setAttribute("aria-expanded", "false");
                sync();
                trigger.focus();
            });
            menu.append(option);
        });
        const close = () => {
            wrapper.classList.remove("open");
            trigger.setAttribute("aria-expanded", "false");
        };
        trigger.addEventListener("click", (event) => {
            event.stopPropagation();
            document.querySelectorAll(".custom-select.open").forEach((openSelect) => {
                if (openSelect !== wrapper) openSelect.classList.remove("open");
            });
            const open = !wrapper.classList.contains("open");
            wrapper.classList.toggle("open", open);
            trigger.setAttribute("aria-expanded", String(open));
            if (open && event.detail === 0) menu.querySelector(".is-selected")?.focus();
        });
        trigger.addEventListener("keydown", (event) => {
            if (["ArrowDown", "ArrowUp"].includes(event.key)) {
                event.preventDefault();
                wrapper.classList.add("open");
                trigger.setAttribute("aria-expanded", "true");
                menu.querySelector(".is-selected")?.focus();
            }
            if (event.key === "Escape") close();
        });
        menu.addEventListener("keydown", (event) => {
            const options = [...menu.querySelectorAll("button:not(:disabled)")],
                current = options.indexOf(document.activeElement);
            if (event.key === "ArrowDown") options[(current + 1) % options.length]?.focus();
            else if (event.key === "ArrowUp")
                options[(current - 1 + options.length) % options.length]?.focus();
            else if (event.key === "Escape") {
                close();
                trigger.focus();
            } else return;
            event.preventDefault();
        });
        select.addEventListener("change", sync);
        select.addEventListener("focus", () => trigger.focus());
        select.form?.addEventListener("reset", () => setTimeout(sync));
        sync();
    });
    document.addEventListener("click", () => {
        document.querySelectorAll(".custom-select.open").forEach((select) => {
            select.classList.remove("open");
            select.querySelector(".custom-select-trigger")?.setAttribute("aria-expanded", "false");
        });
    });

    document.querySelectorAll("form[data-validate]").forEach((form) =>
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let valid = true;
            form.querySelectorAll("[required]").forEach((field) => {
                let msg = "";
                if (field.type === "checkbox" && !field.checked)
                    msg = "Please confirm this option.";
                else if (!String(field.value).trim()) msg = "This field is required.";
                else if (field.type === "email" && !emailOK(field.value))
                    msg = "Enter a valid email address.";
                else if (field.name === "phone" && !phoneOK(field.value))
                    msg = "Enter a valid phone number.";
                else if (field.name === "password" && field.value.length < 8)
                    msg = "Use at least 8 characters.";
                else if (
                    field.name === "confirmPassword" &&
                    field.value !== form.querySelector("[name=password]")?.value
                )
                    msg = "Passwords do not match.";
                const err = field
                    .closest(".field,.check-field,.auth-field,.terms-check")
                    ?.querySelector(".error");
                if (err) err.textContent = msg;
                field.setAttribute("aria-invalid", String(Boolean(msg)));
                if (msg) valid = false;
            });
            form.querySelector(".success")?.classList.toggle("show", valid);
            if (valid) {
                const redirect = form.dataset.redirect;
                form.reset();
                if (redirect)
                    setTimeout(() => {
                        window.location.href = redirect;
                    }, 450);
            } else form.querySelector("[aria-invalid=true]")?.focus();
        }),
    );
    // Motion / reveal interactions
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const addReveal = (element, type = "reveal-up") => {
        if (element && !element.classList.contains("reveal")) element.classList.add("reveal", type);
    };
    document.querySelectorAll(".section-head").forEach((el) => addReveal(el));
    document.querySelectorAll(".inner-hero .split").forEach((group) => {
        addReveal(group.children[0], "reveal-left");
        addReveal(group.children[1], "reveal-right");
    });
    document
        .querySelectorAll("main .split:not(.hero-grid):not(.booking-layout)")
        .forEach((group) => {
            if (!group.closest(".inner-hero")) {
                addReveal(group.children[0], "reveal-left");
                addReveal(group.children[1], "reveal-right");
            }
        });
    document.querySelectorAll(".grid,.steps,.timeline,.trust-strip").forEach((group) => {
        const items = [...group.children].filter((el) =>
            el.matches(".card,.step,.trust-item,.pest-tile"),
        );
        if (items.length > 1) {
            group.classList.add("reveal-stagger");
            items.forEach((item, index) => {
                item.style.setProperty("--reveal-delay", `${Math.min(index * 80, 320)}ms`);
                item.style.setProperty("--mobile-delay", `${Math.min(index * 35, 105)}ms`);
            });
        }
    });
    document
        .querySelectorAll(".highlight,.service-row,.photo-band,.map,.live-map")
        .forEach((el) => addReveal(el, "reveal-up"));
    const heroCopy = document.querySelector(".hero .hero-copy");
    if (heroCopy) {
        heroCopy.classList.add("hero-stage");
        [...heroCopy.children].forEach((el, index) =>
            el.style.setProperty("--hero-delay", `${Math.min(index * 70, 280)}ms`),
        );
    }
    document
        .querySelectorAll(".hero .visual,.hero>.container>.form-card,.hero-grid>.form-card")
        .forEach((el) => addReveal(el, "reveal-scale"));
    document
        .querySelectorAll(".auth-card-large,.auth-controls")
        .forEach((el) => el.classList.add("reveal-auth"));
    document.documentElement.classList.add("motion-ready");
    const revealTargets = document.querySelectorAll(".reveal,.reveal-stagger,.hero-stage");
    if (reducedMotion || !("IntersectionObserver" in window)) {
        revealTargets.forEach((el) => el.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver(
            (entries, observer) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                }),
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
        );
        revealTargets.forEach((el) => revealObserver.observe(el));
    }
    requestAnimationFrame(() =>
        requestAnimationFrame(() => {
            document.querySelector(".auth-card-large")?.classList.add("is-visible");
            document.querySelector(".auth-controls")?.classList.add("is-visible");
        }),
    );
    const stickyHeader = document.querySelector(".site-header");
    if (stickyHeader) {
        let ticking = false;
        const updateHeader = () => {
            stickyHeader.classList.toggle("is-scrolled", scrollY > 16);
            ticking = false;
        };
        addEventListener(
            "scroll",
            () => {
                if (!ticking) {
                    requestAnimationFrame(updateHeader);
                    ticking = true;
                }
            },
            { passive: true },
        );
        updateHeader();
    }
    const countdown = document.querySelector("[data-countdown]");
    if (countdown) {
        const target = Date.now() + 14 * 864e5,
            tick = () => {
                const d = Math.max(0, target - Date.now());
                const days = Math.floor(d / 864e5),
                    hours = Math.floor((d % 864e5) / 36e5),
                    minutes = Math.floor((d % 36e5) / 6e4),
                    dayNode = countdown.querySelector("[data-days]");
                if (dayNode) {
                    dayNode.textContent = String(days).padStart(2, "0");
                    countdown.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
                    countdown.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
                } else {
                    countdown.textContent = `${days} days ${hours} hours`;
                }
            };
        tick();
        setInterval(tick, 6e4);
    }
})();
