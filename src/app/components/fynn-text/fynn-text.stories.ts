import { Meta, StoryObj } from '@storybook/angular';
import { FynnTextComponent } from './fynn-text.component';

const meta: Meta<FynnTextComponent> = {
    title: 'Components/FynnText',
    component: FynnTextComponent,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['dark', 'medium', 'primary', 'error'],
            description: 'Text color variant',
        },
        size: {
            control: 'select',
            options: ['label', 'paragraph', 'h2', 'h1'],
            description: 'Text size variant',
        },
        weight: {
            control: 'select',
            options: ['regular', 'semibold'],
            description: 'Font weight variant',
        },
    },
    render: (args) => ({
        props: args,
        template: `<fynn-text [color]="color" [size]="size" [weight]="weight">{{ text }}</fynn-text>`,
    }),
};

export default meta;
type Story = StoryObj<FynnTextComponent & { text: string }>;

export const Default: Story = {
    args: {
        text: 'This is default text',
        color: 'dark',
        size: 'paragraph',
        weight: 'regular',
    },
};

export const AllSizes: Story = {
    render: () => ({
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <fynn-text size="label">Label text (12px)</fynn-text>
        <fynn-text size="paragraph">Paragraph text (14px)</fynn-text>
        <fynn-text size="h2">H2 heading (16px)</fynn-text>
        <fynn-text size="h1">H1 heading (24px)</fynn-text>
      </div>
    `,
    }),
};

export const AllColors: Story = {
    render: () => ({
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <fynn-text color="dark">Dark text (#2F2F2F)</fynn-text>
        <fynn-text color="medium">Medium text (#5F5F5F)</fynn-text>
        <fynn-text color="primary">Primary text (#1D75EF)</fynn-text>
        <fynn-text color="error">Error text (#C5000F)</fynn-text>
      </div>
    `,
    }),
};

export const AllWeights: Story = {
    render: () => ({
        template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <fynn-text weight="regular">Regular weight (400)</fynn-text>
        <fynn-text weight="semibold">Semibold weight (600)</fynn-text>
      </div>
    `,
    }),
};

export const Heading1: Story = {
    args: {
        text: 'Main Heading',
        size: 'h1',
        weight: 'semibold',
        color: 'dark',
    },
};

export const Heading2: Story = {
    args: {
        text: 'Section Heading',
        size: 'h2',
        weight: 'semibold',
        color: 'dark',
    },
};

export const Paragraph: Story = {
    args: {
        text: 'This is a paragraph of text that demonstrates the default paragraph size.',
        size: 'paragraph',
        weight: 'regular',
        color: 'dark',
    },
};

export const Label: Story = {
    args: {
        text: 'Small label text',
        size: 'label',
        weight: 'regular',
        color: 'medium',
    },
};

export const ErrorMessage: Story = {
    args: {
        text: 'This field is required',
        size: 'label',
        weight: 'regular',
        color: 'error',
    },
};

export const PrimaryAction: Story = {
    args: {
        text: 'Learn more',
        size: 'paragraph',
        weight: 'semibold',
        color: 'primary',
    },
};
