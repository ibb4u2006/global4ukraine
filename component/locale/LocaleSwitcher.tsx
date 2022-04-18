import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

const LocaleSwitcher: React.FunctionComponent = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter((locale) => locale !== activeLocale);
  return (
    <>
      {otherLocales &&
        otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <Button
              key={locale}
              variant={"link"}
              size={"lg"}
              display="block"
              fontSize="4xl"
            >
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                {locale === "cs" ? "🇨🇿" : locale === "uk" ? "🇺🇦" : "🇬🇧"}
              </Link>
            </Button>
          );
        })}
    </>
  );
};

export default LocaleSwitcher;
