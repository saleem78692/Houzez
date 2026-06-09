import React, { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router";

const menuData = {
  home: {
    label: "HOME",
    header: "Home Variants",
    links: [
      { to: "/", label: "Default" },
      { to: "/home-caption-form", label: "With Caption Form" },
      { to: "/home-side-search", label: "With Overlay Side Search" },
      { to: "/home-with-map", label: "With Map" },
      { to: "/home-image-banner", label: "With Image Banner" },
      { to: "/home-property-slider", label: "With Properties Slider" },
      { to: "/home-revolution-slider", label: "With Revolution Slider" },
      { to: "/home-with-video", label: "With Video" },
      { to: "/home-advanced-search", label: "Overlay Advanced Search" },
    ],
  },
  properties: {
    label: "PROPERTIES",
    header: "Browse",
    links: [
      { to: "/", label: "All Properties" },
      { to: "/for-sale", label: "For Sale" },
      { to: "/for-rent", label: "For Rent" },
      { to: "/by-location", label: "By Location" },
      { to: "/featured", label: "Featured" },
      { to: "/recent", label: "Recently Listed" },
    ],
  },
  property: {
    label: "PROPERTY",
    header: "Listing Pages",
    links: [
      { to: "/", label: "Detail Page" },
      { to: "/floor-plans", label: "Floor Plans" },
      { to: "/virtual-tour", label: "Virtual Tour" },
      { to: "/mortgage", label: "Mortgage Calc" },
      { to: "/contact-agent", label: "Contact Agent" },
    ],
  },
  realtor: {
    label: "REALTOR",
    header: "Agents & Agencies",
    links: [
      { to: "/", label: "Our Agents" },
      { to: "/agent-profile", label: "Agent Profile" },
      { to: "/agencies", label: "Agencies" },
      { to: "/top-realtors", label: "Top Realtors" },
    ],
  },
  others: {
    label: "OTHERS",
    header: "More Pages",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
      { to: "/faq", label: "FAQ" },
      { to: "/terms", label: "Terms & Privacy" },
    ],
  },
};

function DummyNav() {
  const [openMenu, setOpenMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const closeTimer = useRef(null);

  // Desktop hover
  const handleMouseEnter = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const handleDropdownEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const toggleAccordion = (key) =>
    setMobileAccordion((prev) => (prev === key ? null : key));

  const closeSidebar = () => {
    setSidebarOpen(false);
    setMobileAccordion(null);
  };

  return (
    <div>
      <div style={{backgroundColor:"rgb(30, 48, 68)"}}>
        {/* ── SIDEBAR OVERLAY (mobile/tablet) ── */}
        {sidebarOpen && (
          <div
            onClick={closeSidebar}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.55)",
              zIndex: 300,
              backdropFilter: "blur(2px)",
            }}
          />
        )}

        {/* ── LEFT SIDEBAR DRAWER ── */}
        <aside
          className="lg:hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: 300,
            background: "#061529",
            zIndex: 400,
            transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            boxShadow: sidebarOpen ? "8px 0 40px rgba(0,0,0,0.6)" : "none",
          }}
        >
          {/* Sidebar Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              height: 68,
              background: "rgba(10,20,40,0.8)",
              borderBottom: "0.5px solid rgba(56,189,248,0.15)",
              flexShrink: 0,
            }}
          >
            <NavLink
              to="/"
              onClick={closeSidebar}
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 20,
                letterSpacing: 4,
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "#38bdf8",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              HOUZEZ
            </NavLink>

            {/* Close button */}
            <button
              onClick={closeSidebar}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                color: "#fff",
                width: 36,
                height: 36,
                cursor: "pointer",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Accordion menu */}
          <ul
            style={{ listStyle: "none", margin: 0, padding: "8px 0", flex: 1 }}
          >
            {Object.entries(menuData).map(([key, menu]) => (
              <li
                key={key}
                style={{ borderBottom: "0.5px solid rgba(255,255,255,0.05)" }}
              >
                <button
                  onClick={() => toggleAccordion(key)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 20px",
                    background:
                      mobileAccordion === key
                        ? "rgba(56,189,248,0.08)"
                        : "transparent",
                    border: "none",
                    color:
                      mobileAccordion === key
                        ? "#38bdf8"
                        : "rgba(255,255,255,0.85)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {menu.label}
                  <span
                    style={{
                      display: "inline-block",
                      transition: "transform 0.25s",
                      transform:
                        mobileAccordion === key
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      fontSize: 14,
                      color:
                        mobileAccordion === key
                          ? "#38bdf8"
                          : "rgba(255,255,255,0.35)",
                    }}
                  >
                    ▾
                  </span>
                </button>

                {/* Accordion links */}
                <div
                  style={{
                    maxHeight: mobileAccordion === key ? 600 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                    background: "rgba(0,0,0,0.25)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      padding: "8px 20px 5px",
                      fontSize: 10,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#38bdf8",
                      fontWeight: 600,
                    }}
                  >
                    {menu.header}
                  </p>
                  <ul
                    style={{ listStyle: "none", margin: 0, padding: "0 0 8px" }}
                  >
                    {menu.links.map((link) => (
                      <li key={link.to + link.label}>
                        <NavLink
                          to={link.to}
                          onClick={closeSidebar}
                          style={({ isActive }) => ({
                            display: "block",
                            padding: "10px 20px 10px 28px",
                            color: isActive
                              ? "#38bdf8"
                              : "rgba(255,255,255,0.65)",
                            fontSize: 13,
                            fontWeight: 500,
                            textDecoration: "none",
                            borderLeft: isActive
                              ? "2px solid #38bdf8"
                              : "2px solid transparent",
                            transition: "color 0.15s, border-color 0.15s",
                          })}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          {/* Sidebar footer */}
          <div
            style={{
              padding: "16px 20px",
              borderTop: "0.5px solid rgba(255,255,255,0.08)",
              background: "rgba(0,0,0,0.2)",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 12,
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              +91 91374 97814
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <NavLink
                to="/login"
                onClick={closeSidebar}
                style={{
                  flex: 1,
                  textAlign: "center",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "9px 10px",
                  border: "0.5px solid rgba(255,255,255,0.25)",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/create-listing"
                onClick={closeSidebar}
                style={{
                  flex: 1,
                  textAlign: "center",
                  background: "#0ea5e9",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "9px 10px",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                + Listing
              </NavLink>
            </div>
          </div>
        </aside>

        {/* ── TOP NAVBAR ── */}
        <nav
          style={{
            background: "rgba(10, 20, 40, 0.65)",
            backdropFilter: "blur(14px)",
            borderBottom: "0.5px solid rgba(255,255,255,0.1)",
            position: "relative",
            zIndex: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 24px",
              height: 68,
              color: "#fff",
            }}
          >
            {/* Hamburger — mobile/tablet only */}
            <button
              className="flex lg:hidden flex-col justify-center gap-1.5"
              onClick={() => setSidebarOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 6,
              }}
              aria-label="Open menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: i === 1 ? 18 : 24,
                    height: 2,
                    background: "#fff",
                    borderRadius: 2,
                  }}
                />
              ))}
            </button>

            {/* Logo — centered on mobile, left on desktop */}
            <NavLink
              to="/"
              className="flex items-center gap-2 text-white no-underline"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 22,
                letterSpacing: 4,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "#38bdf8",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              HOUZEZ
            </NavLink>

            {/* Desktop menu */}
            <ul className="hidden lg:flex gap-1 items-center list-none m-0 p-0">
              {Object.entries(menuData).map(([key, menu]) => (
                <li
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "8px 12px",
                      borderRadius: 6,
                      color:
                        openMenu === key ? "#38bdf8" : "rgba(255,255,255,0.85)",
                      background:
                        openMenu === key
                          ? "rgba(56,189,248,0.1)"
                          : "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {menu.label}
                    <span
                      style={{
                        display: "inline-block",
                        transition: "transform 0.25s",
                        transform:
                          openMenu === key ? "rotate(180deg)" : "rotate(0deg)",
                        fontSize: 10,
                        color:
                          openMenu === key
                            ? "#38bdf8"
                            : "rgba(255,255,255,0.4)",
                      }}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Desktop Dropdown */}
                  <div
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: 0,
                      width: 220,
                      background: "#0d1f3a",
                      border: "0.5px solid rgba(56,189,248,0.2)",
                      borderRadius: 10,
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      opacity: openMenu === key ? 1 : 0,
                      transform:
                        openMenu === key ? "translateY(0)" : "translateY(-8px)",
                      pointerEvents: openMenu === key ? "all" : "none",
                      transition: "opacity 0.22s ease, transform 0.22s ease",
                      zIndex: 200,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: -8,
                        left: 0,
                        right: 0,
                        height: 8,
                      }}
                    />
                    <div
                      style={{
                        padding: "9px 16px 7px",
                        fontSize: 10,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#38bdf8",
                        fontWeight: 600,
                        borderBottom: "0.5px solid rgba(56,189,248,0.15)",
                      }}
                    >
                      {menu.header}
                    </div>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                      {menu.links.map((link) => (
                        <li
                          key={link.to + link.label}
                          style={{
                            borderBottom: "0.5px solid rgba(255,255,255,0.05)",
                          }}
                        >
                          <NavLink
                            to={link.to}
                            style={({ isActive }) => ({
                              display: "block",
                              padding: "10px 16px",
                              color: isActive
                                ? "#fff"
                                : "rgba(255,255,255,0.7)",
                              fontWeight: 500,
                              fontSize: 13,
                              textDecoration: "none",
                              background: isActive
                                ? "rgba(56,189,248,0.1)"
                                : "transparent",
                              transition:
                                "background 0.15s, color 0.15s, padding-left 0.15s",
                            })}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.paddingLeft = "22px";
                              e.currentTarget.style.background =
                                "rgba(56,189,248,0.08)";
                              e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.paddingLeft = "16px";
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color =
                                "rgba(255,255,255,0.7)";
                            }}
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-2">
              <span
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                +91 91374 97814
              </span>
              <NavLink
                to="/login"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "7px 14px",
                  border: "0.5px solid rgba(255,255,255,0.25)",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#38bdf8";
                  e.currentTarget.style.color = "#38bdf8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/create-listing"
                style={{
                  background: "#0ea5e9",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "8px 16px",
                  borderRadius: 6,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0284c7";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0ea5e9";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                + Create Listing
              </NavLink>
            </div>

            {/* Mobile right: just login icon */}
            <NavLink
              to="/login"
              className="flex lg:hidden items-center"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "7px 12px",
                border: "0.5px solid rgba(255,255,255,0.25)",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              Login
            </NavLink>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default DummyNav;
