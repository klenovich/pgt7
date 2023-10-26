// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oATn9WrAqtDeaLtJDt8hxD
// Component: zoXit50v16ZA

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
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent

import { useScreenVariants as useScreenVariantst9JqZjUtfPcp } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: t9JQZjUtfPcp/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_pg_site.module.css"; // plasmic-import: oATn9WrAqtDeaLtJDt8hxD/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: zoXit50v16ZA/css

createPlasmicElementProxy;

export type PlasmicNavBar__VariantMembers = {};
export type PlasmicNavBar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavBar__VariantsArgs;
export const PlasmicNavBar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar__ArgsType;
export const PlasmicNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar__OverridesType = {
  root?: p.Flex<typeof NavigationBar>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  home?: p.Flex<"a"> & Partial<LinkProps>;
  bands?: p.Flex<"a"> & Partial<LinkProps>;
  events?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultNavBarProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavBar__RenderFunc(props: {
  variants: PlasmicNavBar__VariantsArgs;
  args: PlasmicNavBar__ArgsType;
  overrides: PlasmicNavBar__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantst9JqZjUtfPcp()
  });

  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={"#"}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__l836)}
            displayHeight={"40px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={{
              src: "/plasmic/pg_site/images/screenshot20231025At41432PMpng.png",
              fullWidth: 811,
              fullHeight: 144,
              aspectRatio: undefined
            }}
          />
        </p.PlasmicLink>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      closeButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__fm7Qy)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        <React.Fragment>
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__iAAj8)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"50%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"50%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/pg_site/images/image2.png",
              fullWidth: 409,
              fullHeight: 411,
              aspectRatio: undefined
            }}
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__b7KuT)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"50%"}
              displayMinHeight={"0"}
              displayMinWidth={"50%"}
              displayWidth={"50%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/pg_site/images/image3.png",
                fullWidth: 412,
                fullHeight: 412,
                aspectRatio: undefined
              }}
            />
          ) : null}
          <p.PlasmicLink
            data-plasmic-name={"home"}
            data-plasmic-override={overrides.home}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.home
            )}
            component={Link}
            href={
              hasVariant(globalVariants, "screen", "mobileOnly") ? `/` : "/"
            }
            platform={"nextjs"}
          >
            {"Home"}
          </p.PlasmicLink>
          <p.PlasmicLink
            data-plasmic-name={"bands"}
            data-plasmic-override={overrides.bands}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.bands
            )}
            component={Link}
            href={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? `/all-artists`
                : "/"
            }
            platform={"nextjs"}
          >
            {"Bands"}
          </p.PlasmicLink>
          <p.PlasmicLink
            data-plasmic-name={"events"}
            data-plasmic-override={overrides.events}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.events
            )}
            component={Link}
            href={"/"}
            platform={"nextjs"}
          >
            {"Contact"}
          </p.PlasmicLink>
        </React.Fragment>
      }
      openButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__o6RKl)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "home", "bands", "events"],
  link: ["link"],
  home: ["home"],
  bands: ["bands"],
  events: ["events"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
  link: "a";
  home: "a";
  bands: "a";
  events: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar__VariantsArgs;
    args?: PlasmicNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavBar__ArgsType,
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
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    home: makeNodeComponent("home"),
    bands: makeNodeComponent("bands"),
    events: makeNodeComponent("events"),

    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
