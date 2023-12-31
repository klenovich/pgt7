// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oATn9WrAqtDeaLtJDt8hxD
// Component: lOAhjoWYBUsL

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_pg_site.module.css"; // plasmic-import: oATn9WrAqtDeaLtJDt8hxD/projectcss
import sty from "./PlasmicJournalPost2.module.css"; // plasmic-import: lOAhjoWYBUsL/css

createPlasmicElementProxy;

export type PlasmicJournalPost2__VariantMembers = {};
export type PlasmicJournalPost2__VariantsArgs = {};
type VariantPropType = keyof PlasmicJournalPost2__VariantsArgs;
export const PlasmicJournalPost2__VariantProps = new Array<VariantPropType>();

export type PlasmicJournalPost2__ArgsType = {
  currentItem?: any;
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
};
type ArgPropType = keyof PlasmicJournalPost2__ArgsType;
export const PlasmicJournalPost2__ArgProps = new Array<ArgPropType>(
  "currentItem",
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4"
);

export type PlasmicJournalPost2__OverridesType = {
  article?: p.Flex<"div">;
  rectangle38928?: p.Flex<"div">;
};

export interface DefaultJournalPost2Props {
  currentItem?: any;
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  className?: string;
}

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
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"article"}
      data-plasmic-override={overrides.article}
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
        sty.article
      )}
      onClick={async event => {
        const $steps = {};

        $steps["goToPage"] = true
          ? (() => {
              const actionArgs = {
                destination: (() => {
                  try {
                    return "/" + $props.currentItem.slug;
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
        <div className={classNames(projectcss.all, sty.freeBox__yLk3K)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                {(() => {
                  try {
                    return $props.currentItem["Author Name"];
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
            ),
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___8XoBf)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                {(() => {
                  try {
                    return (() => {
                      const date = new Date($props.currentItem.Date);
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
            ),
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___2Web2)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__aD9Zg)}
                displayHeight={"349px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"325px"}
                loading={"lazy"}
                src={(() => {
                  try {
                    return undefined;
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
            ),

            value: args.slot4,
            className: classNames(sty.slotTargetSlot4)
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__fng9D)}>
          {p.renderPlasmicSlot({
            defaultContents: (
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
            ),
            value: args.slot2,
            className: classNames(sty.slotTargetSlot2)
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__r4XXg)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                {(() => {
                  try {
                    return (() => {
                      const postBody = $props.currentItem["Post Body"];
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
            ),
            value: args.slot3,
            className: classNames(sty.slotTargetSlot3)
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  article: ["article", "rectangle38928"],
  rectangle38928: ["rectangle38928"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  article: "div";
  rectangle38928: "div";
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
  if (nodeName === "article") {
    func.displayName = "PlasmicJournalPost2";
  } else {
    func.displayName = `PlasmicJournalPost2.${nodeName}`;
  }
  return func;
}

export const PlasmicJournalPost2 = Object.assign(
  // Top-level PlasmicJournalPost2 renders the root element
  makeNodeComponent("article"),
  {
    // Helper components rendering sub-elements
    rectangle38928: makeNodeComponent("rectangle38928"),

    // Metadata about props expected for PlasmicJournalPost2
    internalVariantProps: PlasmicJournalPost2__VariantProps,
    internalArgProps: PlasmicJournalPost2__ArgProps
  }
);

export default PlasmicJournalPost2;
/* prettier-ignore-end */
