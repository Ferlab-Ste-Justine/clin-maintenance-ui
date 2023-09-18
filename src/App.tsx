import intl from 'react-intl-universal';
import MaintenancePage from '@ferlab/ui/core/pages/MaintenancePage';
import locales from 'locales';

import { BrowserLang } from 'utils/constants';

const App = () => {
  intl.init({
    currentLocale: BrowserLang[window.navigator.language] ?? 'fr',
    locales,
    warningHandler: () => '',
  });
  return (
    <MaintenancePage
      title={intl.get('maintenance.title')}
      subtitle={intl.get('maintenance.subtitle')}
    />
  );
};

const EnhanceApp = () => <App />;

export default EnhanceApp;
