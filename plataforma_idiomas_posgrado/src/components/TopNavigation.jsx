import * as React from "react";
import { TopNavigation as Top } from "@cloudscape-design/components";

const TopNavigation = ({ toggleTheme }) => {
  return (
    <Top
      identity={{
        href: "#",
        title: "Unidad de Idiomas Posgrado - Módulo Administrativo",
        logo: {
          src: "/vite.png",
          alt: "Unidad de Idiomas - Módulo Administrativo"
        }
      }}
      utilities={[
        // {
        //   type: "button",
        //   text: "Link",
        //   href: "https://example.com/",
        //   external: true,
        //   externalIconAriaLabel: " (opens in a new tab)"
        // },
        {
          type: "button",
          iconName: "suggestions",
          title: "Toggle Theme",
          ariaLabel: "Toggle Theme",
          onClick: toggleTheme,
          disableUtilityCollapse: false
        },
        {
          type: "menu-dropdown",
          iconName: "settings",
          ariaLabel: "Settings",
          title: "Settings",
          items: [
            {
              id: "settings-org",
              text: "Organizational settings"
            },
            {
              id: "settings-project",
              text: "Project settings"
            }
          ]
        },
        {
          type: "menu-dropdown",
          text: "Customer Name",
          description: "email@example.com",
          iconName: "user-profile",
          items: [
            { id: "profile", text: "Profile" },
            { id: "preferences", text: "Preferences" },
            { id: "security", text: "Security" },
            {
              id: "support-group",
              text: "Support",
              items: [
                {
                  id: "documentation",
                  text: "Documentation",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                },
                { id: "support", text: "Support" },
                {
                  id: "feedback",
                  text: "Feedback",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                }
              ]
            },
            { id: "signout", text: "Sign out" }
          ]
        }
      ]}
    />
  );
}

export default TopNavigation;