// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oATn9WrAqtDeaLtJDt8hxD
// Component: tlpzCrm3llBR

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: zoXit50v16ZA/component
import Card from "../../Card"; // plasmic-import: at931Xm9Xbfa/component
import Footer from "../../Footer"; // plasmic-import: MMCuprZ7Cbs1/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: J9NgeB3kJyHt/codeComponent

import { useScreenVariants as useScreenVariantst9JqZjUtfPcp } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: t9JQZjUtfPcp/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_pg_site.module.css"; // plasmic-import: oATn9WrAqtDeaLtJDt8hxD/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: tlpzCrm3llBR/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: nFzhwZ1Z9pNS/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  postGenre?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  mainPage?: p.Flex<"section">;
  svg?: p.Flex<"svg">;
  whatIsPostGenre?: p.Flex<"section">;
  liveFromOakland?: p.Flex<"section">;
  upcomingEvents?: p.Flex<"section">;
  allArtists?: p.Flex<typeof Card>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "ee49fade-79f9-4ff9-ad34-1a8ed94b90f9",
        userArgs: {},
        cacheKey: `plasmic.$.ee49fade-79f9-4ff9-ad34-1a8ed94b90f9.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    events: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "4423ec1e-ef1e-455f-88e3-ebae366c58c4",
        userArgs: {},
        cacheKey: `plasmic.$.4423ec1e-ef1e-455f-88e3-ebae366c58c4.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantst9JqZjUtfPcp()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"postGenre"}
          data-plasmic-override={overrides.postGenre}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.postGenre
          )}
        >
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
          />

          <section
            data-plasmic-name={"mainPage"}
            data-plasmic-override={overrides.mainPage}
            className={classNames(projectcss.all, sty.mainPage)}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__mzptP)}
              displayHeight={"auto"}
              displayMaxHeight={"500px"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/pg_site/images/screenshot20231025At41716PMpng.png",
                fullWidth: 974,
                fullHeight: 1162,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__y3Gu
              )}
            >
              {"ELEVATING OAKLAND\u2019S\nMUSIC SCENE"}
            </div>
            <IconIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              onClick={async event => {
                const $steps = {};

                $steps["goToWhat"] = true
                  ? (() => {
                      const actionArgs = { destination: "#what" };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToWhat"] != null &&
                  typeof $steps["goToWhat"] === "object" &&
                  typeof $steps["goToWhat"].then === "function"
                ) {
                  $steps["goToWhat"] = await $steps["goToWhat"];
                }
              }}
              role={"img"}
            />
          </section>
          <section
            data-plasmic-name={"whatIsPostGenre"}
            data-plasmic-override={overrides.whatIsPostGenre}
            className={classNames(projectcss.all, sty.whatIsPostGenre)}
            id={"whatis"}
          >
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__pIqe6
              )}
            >
              {"what is Post Genre?"}
            </h1>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__qeXfy)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/pg_site/images/image.png",
                fullWidth: 718,
                fullHeight: 514,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5BaGj
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Post Genre"}
                </span>
                <React.Fragment>
                  {
                    " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___6FSq
              )}
              component={Link}
              href={"/team"}
              platform={"nextjs"}
            >
              {"Learn More"}
            </p.PlasmicLink>
          </section>
          <section
            data-plasmic-name={"liveFromOakland"}
            data-plasmic-override={overrides.liveFromOakland}
            className={classNames(projectcss.all, sty.liveFromOakland)}
          >
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__tpWXo
              )}
            >
              <React.Fragment>
                <React.Fragment>{"Live From Oakland "}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"concert series"}
                </span>
              </React.Fragment>
            </h1>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__geOdk)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/pg_site/images/image.png",
                fullWidth: 718,
                fullHeight: 514,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__frWix
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Post Genre"}
                </span>
                <React.Fragment>
                  {
                    " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__tLx9R
              )}
              component={Link}
              href={"/live-from-oakland"}
              platform={"nextjs"}
            >
              {"Learn More"}
            </p.PlasmicLink>
          </section>
          <section
            data-plasmic-name={"upcomingEvents"}
            data-plasmic-override={overrides.upcomingEvents}
            className={classNames(projectcss.all, sty.upcomingEvents)}
          >
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__x1V99
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Upcoming Events"}
                </span>
              </React.Fragment>
            </h1>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $queries.events.data
                    .filter(event => new Date(event.Date) > new Date())
                    .sort((a, b) => new Date(a.Date) - new Date(b.Date));
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <Card
                  data-plasmic-name={"allArtists"}
                  data-plasmic-override={overrides.allArtists}
                  className={classNames("__wab_instance", sty.allArtists)}
                  key={currentIndex}
                  noTitle={true}
                  title={"Card title"}
                >
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__yfvQn
                    )}
                    component={Link}
                    href={(() => {
                      try {
                        return "/events/" + currentItem.slug;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    onClick={async event => {
                      const $steps = {};

                      $steps["goToPage"] = true
                        ? (() => {
                            const actionArgs = {
                              destination: (() => {
                                try {
                                  return "/" + currentItem.slug;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                            };
                            return (({ destination }) => {
                              if (
                                typeof destination === "string" &&
                                destination.startsWith("#")
                              ) {
                                document
                                  .getElementById(destination.substr(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              } else {
                                __nextRouter?.push(destination);
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["goToPage"] != null &&
                        typeof $steps["goToPage"] === "object" &&
                        typeof $steps["goToPage"].then === "function"
                      ) {
                        $steps["goToPage"] = await $steps["goToPage"];
                      }
                    }}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__g8Dgx)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__gdke)}
                        displayHeight={"auto"}
                        displayMaxHeight={"90px"}
                        displayMaxWidth={"35%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"200px"}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return currentItem.Photo[0].url;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__vpqZt
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__uWcUm
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.EventName;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "something here";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__zmLpO
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem["Location Name"];
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "something here";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__gMwK
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return (() => {
                                  const date = new Date(currentItem.Date);
                                  const options = {
                                    hour: "numeric",
                                    minute: "numeric",
                                    weekday: "long",
                                    month: "short",
                                    day: "numeric",
                                    year: "2-digit"
                                  };
                                  const formattedDate = date.toLocaleDateString(
                                    "en-US",
                                    options
                                  );
                                  return formattedDate.replace(",", "");
                                })();
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "something here";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                      </div>
                    </div>
                  </p.PlasmicLink>
                </Card>
              );
            })}
          </section>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  postGenre: [
    "postGenre",
    "navBar",
    "mainPage",
    "svg",
    "whatIsPostGenre",
    "liveFromOakland",
    "upcomingEvents",
    "allArtists",
    "footer"
  ],
  navBar: ["navBar"],
  mainPage: ["mainPage", "svg"],
  svg: ["svg"],
  whatIsPostGenre: ["whatIsPostGenre"],
  liveFromOakland: ["liveFromOakland"],
  upcomingEvents: ["upcomingEvents", "allArtists"],
  allArtists: ["allArtists"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  postGenre: "div";
  navBar: typeof NavBar;
  mainPage: "section";
  svg: "svg";
  whatIsPostGenre: "section";
  liveFromOakland: "section";
  upcomingEvents: "section";
  allArtists: typeof Card;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "postGenre") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("postGenre"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    mainPage: makeNodeComponent("mainPage"),
    svg: makeNodeComponent("svg"),
    whatIsPostGenre: makeNodeComponent("whatIsPostGenre"),
    liveFromOakland: makeNodeComponent("liveFromOakland"),
    upcomingEvents: makeNodeComponent("upcomingEvents"),
    allArtists: makeNodeComponent("allArtists"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "POST GENRE",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */