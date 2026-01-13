import { Meta, StoryObj } from '@storybook/angular';
import { ListItemComponent } from './list-item.component';
import { IconComponent } from '../icon/icon.component';

const meta: Meta<ListItemComponent> = {
    title: 'Components/List Item',
    component: ListItemComponent,
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: 'select',
            options: ['default', 'selected'],
        },
        collapsed: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<ListItemComponent>;

export const Default: Story = {
    args: {
        state: 'default',
        collapsed: false,
        disabled: false,
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
      <fynn-list-item [state]="state" [collapsed]="collapsed" [disabled]="disabled">
        <icon slot="start" name="grid" [size]="16"></icon>
        Dashboard
      </fynn-list-item>
    `,
    }),
};

export const Selected: Story = {
    args: {
        state: 'selected',
        collapsed: false,
        disabled: false,
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
      <fynn-list-item [state]="state" [collapsed]="collapsed" [disabled]="disabled">
        <icon slot="start" name="grid" [size]="16"></icon>
        Dashboard
      </fynn-list-item>
    `,
    }),
};

export const Collapsed: Story = {
    args: {
        state: 'default',
        collapsed: true,
        disabled: false,
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
      <fynn-list-item [state]="state" [collapsed]="collapsed" [disabled]="disabled">
        <icon slot="start" name="grid" [size]="16"></icon>
        Dashboard
      </fynn-list-item>
    `,
    }),
};

export const CollapsedSelected: Story = {
    args: {
        state: 'selected',
        collapsed: true,
        disabled: false,
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
      <fynn-list-item [state]="state" [collapsed]="collapsed" [disabled]="disabled">
        <icon slot="start" name="grid" [size]="16"></icon>
        Dashboard
      </fynn-list-item>
    `,
    }),
};

export const Disabled: Story = {
    args: {
        state: 'default',
        collapsed: false,
        disabled: true,
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
      <fynn-list-item [state]="state" [collapsed]="collapsed" [disabled]="disabled">
        <icon slot="start" name="grid" [size]="16"></icon>
        Dashboard
      </fynn-list-item>
    `,
    }),
};

export const MultipleItems: Story = {
    args: {
        state: 'default',
        collapsed: false,
        disabled: false,
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
      <div style="width: 240px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <fynn-list-item state="selected">
          <icon slot="start" name="grid" [size]="16"></icon>
          Dashboard
        </fynn-list-item>
        <fynn-list-item state="default">
          <icon slot="start" name="people" [size]="16"></icon>
          Users
        </fynn-list-item>
        <fynn-list-item state="default">
          <icon slot="start" name="settings" [size]="16"></icon>
          Settings
        </fynn-list-item>
        <fynn-list-item state="default">
          <icon slot="start" name="analytics" [size]="16"></icon>
          Analytics
        </fynn-list-item>
        <fynn-list-item state="default" disabled="true">
          <icon slot="start" name="lock-closed" [size]="16"></icon>
          Admin (Disabled)
        </fynn-list-item>
      </div>
    `,
    }),
};

export const MultipleItemsCollapsed: Story = {
    args: {
        state: 'default',
        collapsed: true,
        disabled: false,
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
      <div style="width: 52px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <fynn-list-item state="selected" [collapsed]="true">
          <icon slot="start" name="grid" [size]="16"></icon>
          Dashboard
        </fynn-list-item>
        <fynn-list-item state="default" [collapsed]="true">
          <icon slot="start" name="people" [size]="16"></icon>
          Users
        </fynn-list-item>
        <fynn-list-item state="default" [collapsed]="true">
          <icon slot="start" name="settings" [size]="16"></icon>
          Settings
        </fynn-list-item>
        <fynn-list-item state="default" [collapsed]="true">
          <icon slot="start" name="analytics" [size]="16"></icon>
          Analytics
        </fynn-list-item>
      </div>
    `,
    }),
};
