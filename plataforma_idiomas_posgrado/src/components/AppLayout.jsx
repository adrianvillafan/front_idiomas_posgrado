//src/components/AppLayout.jsx

import {
  AppLayout as CloudscapeAppLayout,
  Container,
  ContentLayout,
  Header,
  HelpPanel,
  Link,
  SplitPanel,
} from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';
import BreadcrumbGroup from './BreadcrumbGroup';
import SideNavigation from './SideNavigation';
import Flashbar from './Flashbar';
import TopNavigation from './TopNavigation';

const LOCALE = 'es';

const AppLayout = ({ children, toggleTheme }) => {
  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <TopNavigation toggleTheme={toggleTheme}/>
      <CloudscapeAppLayout
        headerVariant="high-contrast"
        breadcrumbs={
          <BreadcrumbGroup/>
        }
        navigationOpen={true}
        navigation={
          <SideNavigation/>
        }
        notifications={
          <Flashbar/>
        }
        toolsOpen={true}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <ContentLayout
          headerVariant="high-contrast"
            header={
              <Header variant="h1" info={<Link variant="info">Info</Link>}>
                Page header
              </Header>
            }
          >
            <Container
              header={
                <Header variant="h2" description="Container description">
                  Container header
                </Header>
              }
            >
              {children}
            </Container>
          </ContentLayout>
        }
        splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}
      />
    </I18nProvider>
  );
};

export default AppLayout;