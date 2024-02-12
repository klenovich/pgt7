// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oATn9WrAqtDeaLtJDt8hxD
// Component: RcX5IhtXncj9

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import NavBar from "../../NavBar"; // plasmic-import: zoXit50v16ZA/component
import JournalPost2 from "../../JournalPost2"; // plasmic-import: lOAhjoWYBUsL/component
import Footer2 from "../../Footer2"; // plasmic-import: DUd-yxFV_3vR/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_pg_site.module.css"; // plasmic-import: oATn9WrAqtDeaLtJDt8hxD/projectcss
import sty from "./PlasmicJournalPost2.module.css"; // plasmic-import: RcX5IhtXncj9/css

createPlasmicElementProxy;

export type PlasmicJournalPost2__VariantMembers = {};
export type PlasmicJournalPost2__VariantsArgs = {};
type VariantPropType = keyof PlasmicJournalPost2__VariantsArgs;
export const PlasmicJournalPost2__VariantProps = new Array<VariantPropType>();

export type PlasmicJournalPost2__ArgsType = {};
type ArgPropType = keyof PlasmicJournalPost2__ArgsType;
export const PlasmicJournalPost2__ArgProps = new Array<ArgPropType>();

export type PlasmicJournalPost2__OverridesType = {
  root?: Flex__<"div">;
  article?: Flex__<"div">;
  rectangle38928?: Flex__<"div">;
  rectangle38952?: Flex__<"div">;
  navBar?: Flex__<typeof NavBar>;
  section?: Flex__<"section">;
  journalPost2?: Flex__<typeof JournalPost2>;
  img?: Flex__<typeof PlasmicImg__>;
  about?: Flex__<"div">;
  askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  footer2?: Flex__<typeof Footer2>;
};

export interface DefaultJournalPost2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicJournalPost2__RenderFunc(props: {
  variants: PlasmicJournalPost2__VariantsArgs;
  args: PlasmicJournalPost2__ArgsType;
  overrides: PlasmicJournalPost2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "fba1c2b1-76a2-477a-807f-28a64624a419",
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
        })()}.$.fba1c2b1-76a2-477a-807f-28a64624a419.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    post2: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "e9dad4a9-9e18-4392-abbf-6a5bfa6921b8",
        userArgs: {
          filters: [
            $queries.query.data[0]["Author Name"],
            $queries.query.data[0].slug
          ]
        },
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
        })()}.$.e9dad4a9-9e18-4392-abbf-6a5bfa6921b8.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    authorinfo: usePlasmicDataOp(() => {
      return {
        sourceId: "8ePA6ZChMTTHShz67XBagq",
        opId: "a9d40df5-4b8f-4a06-8a52-f19cedfa4f3c",
        userArgs: {
          filters: [$queries.query.data[0]["Team Members"][0]]
        },
        cacheKey: `plasmic.$.a9d40df5-4b8f-4a06-8a52-f19cedfa4f3c.$.`,
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
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $queries.articles.data;
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
              <div
                data-plasmic-name={"article"}
                data-plasmic-override={overrides.article}
                className={classNames(projectcss.all, sty.article)}
                key={currentIndex}
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
                                e?.plasmicType === "PlasmicUndefinedDataError"
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
              >
                <div
                  data-plasmic-name={"rectangle38928"}
                  data-plasmic-override={overrides.rectangle38928}
                  className={classNames(projectcss.all, sty.rectangle38928)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eRruu
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.query.data[0].Title;
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
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wwDuq
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return (() => {
                            const date = new Date(currentItem.Date);
                            const options = {
                              day: "2-digit",
                              month: "short",
                              year: "numeric"
                            };
                            return date.toLocaleDateString("en-US", options);
                          })();
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "10 Nov 2023";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    data-plasmic-name={"rectangle38952"}
                    data-plasmic-override={overrides.rectangle38952}
                    className={classNames(projectcss.all, sty.rectangle38952)}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rEblp
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.Title;
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
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__plUc
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return (() => {
                            const postBody = currentItem["Post Body"];
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
                </div>
              </div>
            );
          })}
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <JournalPost2
              data-plasmic-name={"journalPost2"}
              data-plasmic-override={overrides.journalPost2}
              className={classNames("__wab_instance", sty.journalPost2)}
              slot={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wVc1V
                  )}
                >
                  {"12 Feb 2024"}
                </div>
              }
              slot2={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__olpbm
                  )}
                >
                  {"Live From Oakland: Genesis Premiere"}
                </div>
              }
              slot3={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aRjl
                  )}
                >
                  {
                    "It\u2019s an unusually warm Saturday night in February in South Oakland, which for local university students means an excuse to get out and party. However, enough people have set aside the usual house parties and shows to congregate at 401 Atwood Street for the first night of Live From Oakland: Genesis, officially selling out the event over a day in advance. Genesis is part two of a series of concerts hosted by local collective Post-Genre, founded by Adam Klenovich, 20, Eli Alfieri, 23, and Mark Riggio, 20.\nWithin the hour between doors opening at 7 and music starting at 8, the main room of the church fills with a mixture of Post-Genre staff, freelance photographers, students, band members, and local Pittsburgh music enthusiasts. \nThe former organ balcony hosts a collaged shrine of sorts to the concept of Genesis, which sits adjacent to an L-shaped merch setup with both the bands\u2019 and Live From Oakland\u2019s shirts. Photographers congregate around the steps, on the balcony, and line the front of the stage crouched amidst fake plants and rugs that contribute to the \u201cbohemian\u201d cultivated vibe. \n\u201cI\u2019ve just been going to shows forever,\u201d an audience member donning a Heading North shirt in the front row says, waiting for the first band to take the stage. \u201cI try to listen to lots of different kinds of music. I\u2019m a little bit older than college age, but a permanent venue in Oakland would be so great for the environment. It would be nice to be able to support something more local instead of big companies.\u201d\nHeading North, first band to christen the space, takes the stage with a respect for the historical space combined with an eagerness to rock out and make it a night to remember for the over 200 people crammed into the room. \nPassersby outside onto bustling Atwood Street are mesmerized by the lights shining through the formerly abandoned stained-glass windows of the church and the cheers of the crowd leaking out onto the street. \n\tThe audience carefully pushes against each other and dances without jumping, to avoid putting any pressure on the old floorboards. There is a collective sense of admiration for what has been born that night. \n\t\u201cIf Post-Genre opened a permanent music venue in Oakland, we would be at every show,\u201d Heading North drummer Mike Stolarz\u2019s parents say. \u201cWe go to all of our son\u2019s shows, and it would be great to have a space to go with good parking\u2013 that\u2019s key!\u201d A space that is accessible for people of all ages and walks of life, with different reasons and interests in shows, is universally important to audience members. \n\tClay Coast takes the stage next, romancing the crowd with pop-punk tunes, followed by 9fiftyseven, who close out the night with a set reminiscent of their first show with Live From Oakland back in September. The sound and light quality throughout the night is unprecedented, and maintained by an expansive staff of volunteers throughout the night. \n\t\u201cYou don\u2019t see a church venue normally in a trashier place like South Oakland,\u201d one of many photographers for the bands says. \u201cIt\u2019s so cool that they get to use professional equipment and have an actual space.\u201d\n\tThe temporary church space is incredible, but Post-Genre aims to achieve something more permanent in the future. \n\t\u201cIt would be so nice to be able to see a lineup ahead of time and be able to plan to go out on the weekends instead of trying to figure out who is playing at what house,\u201d Pitt sophomore says. \u201cI definitely would be going to a lot more shows.\u201d \n\u201cHaving a permanent venue would be great for local college bands wanting to get their sea legs, or older bands who don\u2019t have the \u2018in\u2019 to house venues or the desire to hang out with a bunch of drunk teenagers,\u201d Giovanni Orisini of Pittsburgh hard-punk band the Inebriators says. \u201cIt would be a great space for creatives to meet each other and connect.\u201d\nPitt graduate Jake Kelley of local Saddle-Creek-signed Feeble Little Horse agrees, saying, \u201cIt could become a really fucking cool thing, especially if they get good touring bands. As long as there\u2019s good parking. But, Pittsburgh, though.\u201d He laughs.\n\tThe first Live From Oakland: Genesis show definitely hit the mark, and left those who were able to snag tickets with a memorable night and hope for the future of the DIY scene in Pittsburgh. Be sure to stick around to see what they craft up with nights 1 and 2, February 17 and March 1. Post-Genre has begun to carve out their niche in the scene, and the way the next few months play out will solidify their impact on not only local bands, but the entire reputation of Oakland and Pittsburgh music."
                  }
                </div>
              }
              slot4={
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"349px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/pg_site/images/screenshot20240212At113428Png.png",
                    fullWidth: 1378,
                    fullHeight: 916,
                    aspectRatio: undefined
                  }}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5PHtW
                )}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToPage"] = true
                    ? (() => {
                        const actionArgs = {
                          destination: (() => {
                            try {
                              return (
                                "../team/" + $queries.authorinfo.data[0].slug
                              );
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
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
              >
                {"Riley Alice Writes"}
              </div>
            </JournalPost2>
            <div
              data-plasmic-name={"about"}
              data-plasmic-override={overrides.about}
              className={classNames(projectcss.all, sty.about)}
              onClick={async event => {
                const $steps = {};

                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: (() => {
                          try {
                            return (
                              "../team/" + $queries.authorinfo.data[0].slug
                            );
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
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
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6QsF
                )}
              >
                {"Riley Alice Writes"}
              </div>
              <div
                data-plasmic-name={
                  "askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow"
                }
                data-plasmic-override={
                  overrides.askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow
                }
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow
                )}
              >
                {"Pgh music journalism & poetry"}
              </div>
              <PlasmicLink__
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link
                )}
                component={Link}
                href={"https://linktr.ee/rileyalicewrites"}
                platform={"nextjs"}
                target={"_blank"}
              >
                {"Linktree >"}
              </PlasmicLink__>
            </div>
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
  root: [
    "root",
    "article",
    "rectangle38928",
    "rectangle38952",
    "navBar",
    "section",
    "journalPost2",
    "img",
    "about",
    "askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow",
    "link",
    "footer2"
  ],
  article: ["article", "rectangle38928", "rectangle38952"],
  rectangle38928: ["rectangle38928", "rectangle38952"],
  rectangle38952: ["rectangle38952"],
  navBar: ["navBar"],
  section: [
    "section",
    "journalPost2",
    "img",
    "about",
    "askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow",
    "link"
  ],
  journalPost2: ["journalPost2", "img"],
  img: ["img"],
  about: [
    "about",
    "askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow",
    "link"
  ],
  askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow:
    [
      "askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow"
    ],
  link: ["link"],
  footer2: ["footer2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  article: "div";
  rectangle38928: "div";
  rectangle38952: "div";
  navBar: typeof NavBar;
  section: "section";
  journalPost2: typeof JournalPost2;
  img: typeof PlasmicImg__;
  about: "div";
  askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow: "div";
  link: "a";
  footer2: typeof Footer2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicJournalPost2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicJournalPost2__VariantsArgs;
    args?: PlasmicJournalPost2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicJournalPost2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicJournalPost2__ArgsType,
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
          internalArgPropNames: PlasmicJournalPost2__ArgProps,
          internalVariantPropNames: PlasmicJournalPost2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicJournalPost2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicJournalPost2";
  } else {
    func.displayName = `PlasmicJournalPost2.${nodeName}`;
  }
  return func;
}

export const PlasmicJournalPost2 = Object.assign(
  // Top-level PlasmicJournalPost2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    article: makeNodeComponent("article"),
    rectangle38928: makeNodeComponent("rectangle38928"),
    rectangle38952: makeNodeComponent("rectangle38952"),
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    journalPost2: makeNodeComponent("journalPost2"),
    img: makeNodeComponent("img"),
    about: makeNodeComponent("about"),
    askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow:
      makeNodeComponent(
        "askedToDefineTheirGenreFunkyLampUsuallyResortsToItsComplicatedAsAMeltingPotOfFunkRockAlternativeFolkIndieAndPunkItsComplicatedMightCaptureTheirSoundBetterThanAnyCategoryCouldTheirContagiousStagePreferenceAndMemorableChorusesSeeCrowdsDancingAndSingingAlongAtEveryShow"
      ),
    link: makeNodeComponent("link"),
    footer2: makeNodeComponent("footer2"),

    // Metadata about props expected for PlasmicJournalPost2
    internalVariantProps: PlasmicJournalPost2__VariantProps,
    internalArgProps: PlasmicJournalPost2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicJournalPost2;
/* prettier-ignore-end */
