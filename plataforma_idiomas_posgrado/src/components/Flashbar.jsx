//src/components/Flashbar.jsx

import React from "react";
import {Flashbar as Flash, Link} from "@cloudscape-design/components";

const Flashbar = () => {
  const [items, setItems] = React.useState([
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      content: (
        <>
          This is an info flash message. It contains{" "}
          <Link color="inverted" href="#">
            a link to another page
          </Link>
          .
        </>
      ),
      id: "message_1"
    }
  ]);
  return <Flash items={items} />;
}

export default Flashbar;