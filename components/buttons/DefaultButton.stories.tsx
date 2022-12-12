import { Meta } from "@storybook/react";
import { DefaultButton } from "./DefaultButton";
import { mockDefaultButtonProps } from "./DefaultButton.mock";

export default {
  component: DefaultButton,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full h-screen grid place-items-center">
        <div className="max-w-sm h-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta<typeof DefaultButton>;

export const Default: Meta<typeof DefaultButton> = {
  args: {
    ...mockDefaultButtonProps,
  },
};

export const Variations: Meta<typeof DefaultButton> = {
  args: {
    buttonText: "Button",
    buttonType: "default",
    buttonRadius: "default",
  },
};

export const Sizes: Meta<typeof DefaultButton> = {
  args: {
    buttonText: "Button",
    buttonType: "default",
    buttonRadius: "default",
  },
};
