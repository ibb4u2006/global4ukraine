import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideTranslations = async (
  locale: any,
  nameSpaces: string[]
) => {
  return await serverSideTranslations(locale, nameSpaces);
};
