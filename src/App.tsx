import intl from 'react-intl-universal';
import locales from 'locales';
import MaintenancePage from 'views/MaintenancePage';

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
