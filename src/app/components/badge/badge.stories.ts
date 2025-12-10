import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
    title: 'Components/Badge',
    component: BadgeComponent,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'primary', 'primary-faded',
                'success', 'success-faded',
                'warning', 'warning-faded',
                'danger', 'danger-faded',
                'medium', 'medium-subtle'
            ],
        },
        icon: {
            control: 'text',
            description: 'Ionicons name (use outline variants, e.g., checkmark-circle-outline)'
        },
    },
    render: (args) => ({
        props: args,
        template: `<badge [variant]="variant" [icon]="icon">{{ label }}</badge>`,
    }),
};

export default meta;
type Story = StoryObj<BadgeComponent & { label: string }>;

export const Default: Story = {
    args: {
        label: 'Badge',
        variant: 'medium-subtle',
        icon: '',
    },
};

export const Success: Story = {
    args: {
        label: 'Active',
        variant: 'success',
        icon: '',
    },
};

export const Warning: Story = {
    args: {
        label: 'Pending',
        variant: 'warning',
        icon: '',
    },
};

export const Danger: Story = {
    args: {
        label: 'Error',
        variant: 'danger',
        icon: '',
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Verified',
        variant: 'primary',
        icon: 'checkmark-circle-outline',
    },
};
