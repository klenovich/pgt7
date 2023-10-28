// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oATn9WrAqtDeaLtJDt8hxD
// Component: d3HuE4i3pl4l

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
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: J9NgeB3kJyHt/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_pg_site.module.css"; // plasmic-import: oATn9WrAqtDeaLtJDt8hxD/projectcss
import sty from "./PlasmicEventPage.module.css"; // plasmic-import: d3HuE4i3pl4l/css

createPlasmicElementProxy;

export type PlasmicEventPage__VariantMembers = {};
export type PlasmicEventPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicEventPage__VariantsArgs;
export const PlasmicEventPage__VariantProps = new Array<VariantPropType>();

export type PlasmicEventPage__ArgsType = {};
type ArgPropType = keyof PlasmicEventPage__ArgsType;
export const PlasmicEventPage__ArgProps = new Array<ArgPropType>();

export type PlasmicEventPage__OverridesType = {
  root?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  bandInfo?: p.Flex<"section">;
  name?: p.Flex<"section">;
  description?: p.Flex<"section">;
  upcoming?: p.Flex<"section">;
  upcomingTxt?: p.Flex<"section">;
  card?: p.Flex<typeof Card>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  section?: p.Flex<"section">;
  name2?: p.Flex<"section">;
  description2?: p.Flex<"section">;
};

export interface DefaultEventPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEventPage__RenderFunc(props: {
  variants: PlasmicEventPage__VariantsArgs;
  args: PlasmicEventPage__ArgsType;
  overrides: PlasmicEventPage__OverridesType;
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
    event: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "9d74cc69-bfb6-48a0-960b-eac4370b1698",
        userArgs: {
          filters: [$ctx.params.slug]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getOne";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.9d74cc69-bfb6-48a0-960b-eac4370b1698.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    artistshere: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "1854939d-e8e9-4fbe-acf3-dbbf0da059a1",
        userArgs: {
          ids: [$queries.event.data[0].Artists]
        },
        cacheKey: `plasmic.$.1854939d-e8e9-4fbe-acf3-dbbf0da059a1.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    locationInfo: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "0609617e-99d4-4347-98f1-c4886f6a8edb",
        userArgs: {
          id: [$queries.event.data[0].Location[0]]
        },
        cacheKey: `plasmic.$.0609617e-99d4-4347-98f1-c4886f6a8edb.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
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
            sty.root
          )}
        >
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
          />

          <section
            data-plasmic-name={"bandInfo"}
            data-plasmic-override={overrides.bandInfo}
            className={classNames(projectcss.all, sty.bandInfo)}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__vXnXr)}
              displayHeight={"auto"}
              displayMaxHeight={"300px"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={(() => {
                try {
                  return $queries.event.data[0].Photo[0].url;
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

            <section
              data-plasmic-name={"name"}
              data-plasmic-override={overrides.name}
              className={classNames(projectcss.all, sty.name)}
            >
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__ziqK
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $queries.event.data[0].EventName;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Page title";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </h1>
            </section>
            <section
              data-plasmic-name={"description"}
              data-plasmic-override={overrides.description}
              className={classNames(projectcss.all, sty.description)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1Hvtj
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $queries.event.data[0].EventDesc;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "xxxxx\n";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </section>
            <section
              data-plasmic-name={"upcoming"}
              data-plasmic-override={overrides.upcoming}
              className={classNames(projectcss.all, sty.upcoming)}
            >
              <section
                data-plasmic-name={"upcomingTxt"}
                data-plasmic-override={overrides.upcomingTxt}
                className={classNames(projectcss.all, sty.upcomingTxt)}
              >
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1___5EWD
                  )}
                >
                  {"ARTISTS"}
                </h1>
              </section>
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return $queries.artistshere.data;
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
                    data-plasmic-name={"card"}
                    data-plasmic-override={overrides.card}
                    className={classNames("__wab_instance", sty.card)}
                    key={currentIndex}
                    noTitle={true}
                  >
                    <p.PlasmicLink
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link
                      )}
                      component={Link}
                      href={(() => {
                        try {
                          return "/artists/" + currentItem.slug;
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
                      platform={"nextjs"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___76XTf
                        )}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__o0QAc)}
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
                            sty.freeBox__mgXo7
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__rSRs
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.Name;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
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
                              sty.text__zKqhw
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.Location;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
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
                              sty.text__igPho
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.Genre;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
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
            <section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames(projectcss.all, sty.section)}
            >
              <section
                data-plasmic-name={"name2"}
                data-plasmic-override={overrides.name2}
                className={classNames(projectcss.all, sty.name2)}
              >
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__xb6KO
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.event.data[0]["Location Name"];
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "Page title";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </h1>
              </section>
              <section
                data-plasmic-name={"description2"}
                data-plasmic-override={overrides.description2}
                className={classNames(projectcss.all, sty.description2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gwOzI
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.locationInfo.data.Description;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "xxxxx\n";
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
                    sty.text__mWyNj
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.locationInfo.data.Address;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "xxxxx\n";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              </section>
            </section>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "bandInfo",
    "name",
    "description",
    "upcoming",
    "upcomingTxt",
    "card",
    "link",
    "section",
    "name2",
    "description2"
  ],
  navBar: ["navBar"],
  bandInfo: [
    "bandInfo",
    "name",
    "description",
    "upcoming",
    "upcomingTxt",
    "card",
    "link",
    "section",
    "name2",
    "description2"
  ],
  name: ["name"],
  description: ["description"],
  upcoming: ["upcoming", "upcomingTxt", "card", "link"],
  upcomingTxt: ["upcomingTxt"],
  card: ["card", "link"],
  link: ["link"],
  section: ["section", "name2", "description2"],
  name2: ["name2"],
  description2: ["description2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar: typeof NavBar;
  bandInfo: "section";
  name: "section";
  description: "section";
  upcoming: "section";
  upcomingTxt: "section";
  card: typeof Card;
  link: "a";
  section: "section";
  name2: "section";
  description2: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEventPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEventPage__VariantsArgs;
    args?: PlasmicEventPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEventPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEventPage__ArgsType,
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
          internalArgPropNames: PlasmicEventPage__ArgProps,
          internalVariantPropNames: PlasmicEventPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEventPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEventPage";
  } else {
    func.displayName = `PlasmicEventPage.${nodeName}`;
  }
  return func;
}

export const PlasmicEventPage = Object.assign(
  // Top-level PlasmicEventPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    bandInfo: makeNodeComponent("bandInfo"),
    _name: makeNodeComponent("name"),
    description: makeNodeComponent("description"),
    upcoming: makeNodeComponent("upcoming"),
    upcomingTxt: makeNodeComponent("upcomingTxt"),
    card: makeNodeComponent("card"),
    link: makeNodeComponent("link"),
    section: makeNodeComponent("section"),
    name2: makeNodeComponent("name2"),
    description2: makeNodeComponent("description2"),

    // Metadata about props expected for PlasmicEventPage
    internalVariantProps: PlasmicEventPage__VariantProps,
    internalArgProps: PlasmicEventPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEventPage;
/* prettier-ignore-end */
