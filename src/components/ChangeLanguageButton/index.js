const I18N_STORAGE_KEY = "i18nextLng";

const ChangeLanguageButton = () => {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const handleSelectChange = (event) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location;
  };
  return <></>;
};

export default ChangeLanguageButton;
