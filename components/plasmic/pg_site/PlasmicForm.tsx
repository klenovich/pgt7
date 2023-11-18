// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oATn9WrAqtDeaLtJDt8hxD
// Component: yTxv42yHQfoR

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
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
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/SchemaForm";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_pg_site.module.css"; // plasmic-import: oATn9WrAqtDeaLtJDt8hxD/projectcss
import sty from "./PlasmicForm.module.css"; // plasmic-import: yTxv42yHQfoR/css

createPlasmicElementProxy;

export type PlasmicForm__VariantMembers = {};
export type PlasmicForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicForm__VariantsArgs;
export const PlasmicForm__VariantProps = new Array<VariantPropType>();

export type PlasmicForm__ArgsType = {};
type ArgPropType = keyof PlasmicForm__ArgsType;
export const PlasmicForm__ArgProps = new Array<ArgPropType>();

export type PlasmicForm__OverridesType = {
  root?: p.Flex<"div">;
  form?: p.Flex<typeof FormWrapper>;
  button?: p.Flex<typeof AntdButton>;
  text?: p.Flex<"div">;
};

export interface DefaultFormProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicForm__RenderFunc(props: {
  variants: PlasmicForm__VariantsArgs;
  args: PlasmicForm__ArgsType;
  overrides: PlasmicForm__OverridesType;
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: p.generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: p.generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

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
          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.form),
              data: {
                sourceId: "8ePA6ZChMTTHShz67XBagq",
                opId: "58e24c85-07dc-43b8-b346-9acfe421e745",
                userArgs: {},
                cacheKey: `plasmic.$.${(() => {
                  try {
                    return "getSchema";
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}.$.58e24c85-07dc-43b8-b346-9acfe421e745.$.`,
                invalidatedKeys: null,
                roleId: null
              },
              extendedOnValuesChange:
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "value",
                  ["form", "value"],
                  FormWrapper_Helpers
                ),
              formItems: [],
              labelCol: { span: 8, horizontalOnly: true },
              layout: "vertical",
              mode: "simplified",
              onFinish: async values => {
                const $steps = {};

                $steps["defaultSubmit"] = true
                  ? (() => {
                      const actionArgs = {
                        dataOp: {
                          sourceId: "8ePA6ZChMTTHShz67XBagq",
                          opId: "51719504-1ffd-4f7d-ac7c-073f92dd01da",
                          userArgs: {
                            variables: [$state.form.value]
                          },
                          cacheKey: null,
                          invalidatedKeys: ["plasmic_refresh_all"],
                          roleId: null
                        }
                      };
                      return (async ({ dataOp, continueOnError }) => {
                        try {
                          const response = await executePlasmicDataOp(dataOp, {
                            userAuthToken: dataSourcesCtx?.userAuthToken,
                            user: dataSourcesCtx?.user
                          });
                          await plasmicInvalidate(dataOp.invalidatedKeys);
                          return response;
                        } catch (e) {
                          if (!continueOnError) {
                            throw e;
                          }
                          return e;
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["defaultSubmit"] != null &&
                  typeof $steps["defaultSubmit"] === "object" &&
                  typeof $steps["defaultSubmit"].then === "function"
                ) {
                  $steps["defaultSubmit"] = await $steps["defaultSubmit"];
                }
              },
              onIsSubmittingChange:
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "isSubmitting",
                  ["form", "isSubmitting"],
                  FormWrapper_Helpers
                ),
              ref: ref => {
                $refs["form"] = ref;
              },
              submitSlot: (
                <AntdButton
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  submitsForm={true}
                  type={"primary"}
                >
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Submit"}
                  </div>
                </AntdButton>
              ),
              wrapperCol: { span: 16, horizontalOnly: true }
            };
            p.initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "form.value"
                },
                {
                  name: "isSubmitting",
                  plasmicStateName: "form.isSubmitting"
                }
              ],
              [],
              FormWrapper_Helpers ?? {},
              child$Props
            );

            return (
              <FormWrapper
                data-plasmic-name={"form"}
                data-plasmic-override={overrides.form}
                {...child$Props}
              />
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "form", "button", "text"],
  form: ["form", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  form: typeof FormWrapper;
  button: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicForm__VariantsArgs;
    args?: PlasmicForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicForm__ArgsType,
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
          internalArgPropNames: PlasmicForm__ArgProps,
          internalVariantPropNames: PlasmicForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicForm";
  } else {
    func.displayName = `PlasmicForm.${nodeName}`;
  }
  return func;
}

export const PlasmicForm = Object.assign(
  // Top-level PlasmicForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicForm
    internalVariantProps: PlasmicForm__VariantProps,
    internalArgProps: PlasmicForm__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicForm;
/* prettier-ignore-end */
