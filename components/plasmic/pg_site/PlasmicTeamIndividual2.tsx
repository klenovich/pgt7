// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oATn9WrAqtDeaLtJDt8hxD
// Component: LYexCHscrrI3

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
import JournalPost2 from "../../JournalPost2"; // plasmic-import: lOAhjoWYBUsL/component
import Footer2 from "../../Footer2"; // plasmic-import: DUd-yxFV_3vR/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_pg_site.module.css"; // plasmic-import: oATn9WrAqtDeaLtJDt8hxD/projectcss
import sty from "./PlasmicTeamIndividual2.module.css"; // plasmic-import: LYexCHscrrI3/css

createPlasmicElementProxy;

export type PlasmicTeamIndividual2__VariantMembers = {};
export type PlasmicTeamIndividual2__VariantsArgs = {};
type VariantPropType = keyof PlasmicTeamIndividual2__VariantsArgs;
export const PlasmicTeamIndividual2__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTeamIndividual2__ArgsType = {};
type ArgPropType = keyof PlasmicTeamIndividual2__ArgsType;
export const PlasmicTeamIndividual2__ArgProps = new Array<ArgPropType>();

export type PlasmicTeamIndividual2__OverridesType = {
  postGenre?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  bandInfo?: p.Flex<"section">;
  name?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  journalPost2?: p.Flex<typeof JournalPost2>;
  footer2?: p.Flex<typeof Footer2>;
};

export interface DefaultTeamIndividual2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTeamIndividual2__RenderFunc(props: {
  variants: PlasmicTeamIndividual2__VariantsArgs;
  args: PlasmicTeamIndividual2__ArgsType;
  overrides: PlasmicTeamIndividual2__OverridesType;
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
    artists: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "fd620945-59b4-4549-bf8c-4afed04dc40f",
        userArgs: {},
        cacheKey: `plasmic.$.${(() => {
          try {
            return undefined;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.fd620945-59b4-4549-bf8c-4afed04dc40f.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    showsbyartist: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "4423ec1e-ef1e-455f-88e3-ebae366c58c4",
        userArgs: {},
        cacheKey: `plasmic.$.4423ec1e-ef1e-455f-88e3-ebae366c58c4.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    shows: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "2080cfe3-cb5b-422c-841e-6275cd9ab8b9",
        userArgs: {
          filters: [$queries.artists.data[0].Name]
        },
        cacheKey: `plasmic.$.2080cfe3-cb5b-422c-841e-6275cd9ab8b9.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    location: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "458bc9e6-53e8-42a3-958e-0f2a53c39b6b",
        userArgs: {
          ids: [$queries.showsbyartist.data[0].Location[0]]
        },
        cacheKey: `plasmic.$.458bc9e6-53e8-42a3-958e-0f2a53c39b6b.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    componentData4: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "0ed40e09-565a-4b20-81c6-335aac010f44",
        userArgs: {
          filters: [$queries.artists.data[0].Name]
        },
        cacheKey: `plasmic.$.0ed40e09-565a-4b20-81c6-335aac010f44.$.`,
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
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicTeamIndividual2.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicTeamIndividual2.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicTeamIndividual2.pageMetadata.title}
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
          bkgc={`${{ background: $queries.artists.data[0].Color }}${undefined}`}
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
            data-plasmic-name={"bandInfo"}
            data-plasmic-override={overrides.bandInfo}
            className={classNames(projectcss.all, sty.bandInfo)}
            style={undefined}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__lRRbi)}
              displayHeight={"100vw"}
              displayMaxHeight={"500px"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={(() => {
                try {
                  return $queries.artists.data[0].Picture[0].url;
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
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $queries.artists.data[0].Name;
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
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $queries.componentData4.data.sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                  );
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
                <p.PlasmicLink
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(projectcss.all, projectcss.a, sty.link)}
                  component={Link}
                  key={currentIndex}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToJournalPost"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: `/journal/${(() => {
                              try {
                                return currentItem.slug;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}`
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
                      $steps["goToJournalPost"] != null &&
                      typeof $steps["goToJournalPost"] === "object" &&
                      typeof $steps["goToJournalPost"].then === "function"
                    ) {
                      $steps["goToJournalPost"] = await $steps[
                        "goToJournalPost"
                      ];
                    }
                  }}
                  platform={"nextjs"}
                >
                  <JournalPost2
                    data-plasmic-name={"journalPost2"}
                    data-plasmic-override={overrides.journalPost2}
                    className={classNames("__wab_instance", sty.journalPost2)}
                    currentItem={currentItem}
                    slot2={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__g6H1A
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $props.currentItem.Title;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Mr.Dr. drops new single \u201cSouth\nOakland\u201d";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    }
                    slot3={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ajF8Q
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return (() => {
                                const postBody =
                                  $props.currentItem["Post Body"];
                                if (postBody.length <= 200) {
                                  return postBody;
                                } else {
                                  return postBody.slice(0, 200) + "...";
                                }
                              })();
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return 'Pittsburgh\'s most enigmatic and eclectic musical collective, "Mr. Dr.," has dropped a scorching new single, "South O," that\'s setting the Steel City\'s music scene on fire. This explosive track is destined to become an instant classic...';
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    }
                    slot4={
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__m8W3O)}
                        displayHeight={"349px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return currentItem.Picture[0].url;
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
                    }
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return "By: " + currentItem["Author Name"];
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "By: Aidan Dunn";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </JournalPost2>
                </p.PlasmicLink>
              );
            })}
          </section>
          <Footer2
            data-plasmic-name={"footer2"}
            data-plasmic-override={overrides.footer2}
            className={classNames("__wab_instance", sty.footer2)}
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
    "bandInfo",
    "name",
    "h1",
    "link",
    "journalPost2",
    "footer2"
  ],
  navBar: ["navBar"],
  bandInfo: ["bandInfo", "name", "h1", "link", "journalPost2"],
  name: ["name", "h1"],
  h1: ["h1"],
  link: ["link", "journalPost2"],
  journalPost2: ["journalPost2"],
  footer2: ["footer2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  postGenre: "div";
  navBar: typeof NavBar;
  bandInfo: "section";
  name: "section";
  h1: "h1";
  link: "a";
  journalPost2: typeof JournalPost2;
  footer2: typeof Footer2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeamIndividual2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeamIndividual2__VariantsArgs;
    args?: PlasmicTeamIndividual2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeamIndividual2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeamIndividual2__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTeamIndividual2__ArgProps,
          internalVariantPropNames: PlasmicTeamIndividual2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeamIndividual2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "postGenre") {
    func.displayName = "PlasmicTeamIndividual2";
  } else {
    func.displayName = `PlasmicTeamIndividual2.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamIndividual2 = Object.assign(
  // Top-level PlasmicTeamIndividual2 renders the root element
  makeNodeComponent("postGenre"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    bandInfo: makeNodeComponent("bandInfo"),
    _name: makeNodeComponent("name"),
    h1: makeNodeComponent("h1"),
    link: makeNodeComponent("link"),
    journalPost2: makeNodeComponent("journalPost2"),
    footer2: makeNodeComponent("footer2"),

    // Metadata about props expected for PlasmicTeamIndividual2
    internalVariantProps: PlasmicTeamIndividual2__VariantProps,
    internalArgProps: PlasmicTeamIndividual2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "POST GENRE",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTeamIndividual2;
/* prettier-ignore-end */
