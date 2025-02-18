//src/components/AppLayout.jsx

import React, { useState } from 'react';
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
import DynamicHeader from "./DynamicHeader";
import AppRoutes from '../routes/AppRoutes';
import { FlashbarProvider } from '../pages/app/hooks/useFlashbar';

const LOCALE = 'es';

const AppLayout = ({ toggleTheme }) => {
    // Estado para controlar si la navegación está abierta o cerrada
    const [navigationOpen, setNavigationOpen] = useState(true);

    return (
        <I18nProvider locale={LOCALE} messages={[messages]}>
            <FlashbarProvider>
                <TopNavigation toggleTheme={toggleTheme} />
                <CloudscapeAppLayout
                    headerVariant="high-contrast"
                    breadcrumbs={<BreadcrumbGroup />}
                    navigationOpen={navigationOpen} // Estado de la navegación
                    onNavigationChange={({ detail }) => setNavigationOpen(detail.open)} // Manejador de cambios
                    navigation={<SideNavigation />}
                    notifications={<Flashbar />}
                    //toolsOpen={true}
                    //tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
                    content={
                        <ContentLayout
                            headerVariant="high-contrast"
                            header={<DynamicHeader />}
                        >
                            <AppRoutes />

                        </ContentLayout>
                    }
                    //splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}
                />
            </FlashbarProvider>
        </I18nProvider>
    );
};

export default AppLayout;