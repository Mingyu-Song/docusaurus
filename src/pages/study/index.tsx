import React, { useState } from "react";
import Layout from "@theme/Layout";
import BackToTopButton from "@theme/BackToTopButton";
import type { Props } from "@theme/DocPage/Layout";
import DocPageLayoutSidebar from "@theme/DocPage/Layout/Sidebar";
import DocPageLayoutMain from "@theme/DocPage/Layout/Main";

import { useDocsSidebar, DocsSidebarProvider } from "@docusaurus/theme-common";

export default function StudyPage() {
  return (
    <DocsSidebarProvider
      name="books"
      items={[
        {
          type: "link",
          href: "/",
          label: "1",
        },
        {
          type: "link",
          href: "/",
          label: "2",
        },
      ]}
    >
      <DocPageLayout>hello world</DocPageLayout>
    </DocsSidebarProvider>
  );
}

function DocPageLayout({ children }: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <Layout>
      <BackToTopButton />
      <div>
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
          {children}
        </DocPageLayoutMain>
      </div>
    </Layout>
  );
}
