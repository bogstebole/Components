import { Meta, StoryObj } from '@storybook/angular';
import { FynnButtonComponent } from './fynn-button.component';
import { IconComponent } from '../icon/icon.component';

const meta: Meta<FynnButtonComponent> = {
    title: 'Components/Button',
    component: FynnButtonComponent,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'clear'],
        },
        color: {
            control: 'select',
            options: ['primary', 'danger', 'dark'],
        },
        size: {
            control: 'select',
            options: ['default', 'small'],
        },
        iconOnly: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<FynnButtonComponent>;

export const Default: Story = {
    args: {
        variant: 'solid',
        color: 'primary',
        size: 'default',
    },
    render: (args) => ({
        props: args,
        template: `<fynn-button [variant]="variant" [color]="color" [size]="size" [disabled]="disabled">Button</fynn-button>`,
    }),
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        color: 'primary',
        size: 'default',
    },
    render: (args) => ({
        props: args,
        template: `<fynn-button [variant]="variant" [color]="color" [size]="size" [disabled]="disabled">Outline</fynn-button>`,
    }),
};

export const Clear: Story = {
    args: {
        variant: 'clear',
        color: 'primary',
        size: 'default',
    },
    render: (args) => ({
        props: args,
        template: `<fynn-button [variant]="variant" [color]="color" [size]="size" [disabled]="disabled">Clear</fynn-button>`,
    }),
};

export const Small: Story = {
    args: {
        variant: 'solid',
        color: 'primary',
        size: 'small',
    },
    render: (args) => ({
        props: args,
        template: `<fynn-button [variant]="variant" [color]="color" [size]="size" [disabled]="disabled">Small Button</fynn-button>`,
    }),
};

export const IconOnly: Story = {
    args: {
        variant: 'solid',
        color: 'primary',
        size: 'default',
        iconOnly: true,
    },
    decorators: [
        (storyFn) => {
            const story = storyFn();
            return {
                ...story,
                moduleMetadata: {
                    imports: [IconComponent],
                },
            };
        },
    ],
    render: (args) => ({
        props: args,
        template: `
      <fynn-button [variant]="variant" [color]="color" [size]="size" [disabled]="disabled" [iconOnly]="iconOnly">
        <icon name="star" [size]="size === 'small' ? 16 : 20"></icon>
      </fynn-button>
    `,
    }),
};
