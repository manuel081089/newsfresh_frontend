import React from "react";
// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import AccountCircle from "@material-ui/icons/AccountCircle";
// core components
import Tabs from "components/CustomTabs/CustomTabs.jsx";
import Tasks from "components/Tasks/Tasks.jsx";

import { website } from "variables/general.jsx";
import SignInForm from "./SignInForm";

export default function DemoTabs() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <Tabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Login",
                tabIcon: AccountCircle,
                tabContent: <SignInForm />
              },
              {
                tabName: "Registro",
                tabIcon: PersonAdd,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
