import Link from "~/components/Link";
import Check from "~/components/icons/Check";
import GitHubIcon from "~/components/icons/GitHub";
import { usePage } from "~/contexts/PageContext";
import metaData from "~/data/meta";

const { versions } = metaData;

export default function Nav({ shouldDisplayDocsVersion = false, ...props }) {
  const { pageTheme, switchTheme } = usePage();
  const handleSwitchTheme = (event) => {
    event.preventDefault();
    switchTheme();
  };

  const isThemeDark = pageTheme === "dark";

  return (
    <nav {...props}>
      <ul>
        {shouldDisplayDocsVersion && (
          <li>
            <details className="dropdown">
              <summary>{`v${versions.current}`}</summary>
              <ul dir="rtl">
                {versions.all.map((version) => {
                  const { version: label, url } = version;
                  const isCurrent = versions.current === label;
                  const linkLabel = isCurrent ? (
                    <>
                      <span>{`v${label}`}</span>
                      <Check strokeWidth={2} />
                    </>
                  ) : (
                    `v${label}`
                  );

                  return (
                    <li key={label}>
                      {isCurrent ? (
                        <Link to={url} aria-current={true} dir="ltr">
                          {linkLabel}
                        </Link>
                      ) : (
                        <a href={url}>{linkLabel}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        )}
        <li className="hide-before-sm">
          <Link to="/" className="contrast">
            Experiences
          </Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <Link
            to="https://github.com/VishalVaitla"
            className="contrast"
            aria-label="GitHub repository"
          >
            <GitHubIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
