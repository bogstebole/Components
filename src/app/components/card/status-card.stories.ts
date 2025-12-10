import { Meta, StoryObj } from '@storybook/angular';
import { StatusCardComponent } from './status-card.component';

const meta: Meta<StatusCardComponent> = {
    title: 'Components/Card/Status Card',
    component: StatusCardComponent,
    tags: ['autodocs'],
    argTypes: {
        badge: { control: 'text' },
        badgeVariant: {
            control: 'select',
            options: ['primary', 'success', 'warning', 'danger', 'primary-faded', 'success-faded', 'warning-faded', 'danger-faded', 'medium-subtle', 'medium']
        },
        timestamp: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        showFooter: { control: 'boolean' },
        footerText: { control: 'text' }
    }
};

export default meta;
type Story = StoryObj<StatusCardComponent>;

export const Default: Story = {
    args: {
        badge: 'Active',
        badgeVariant: 'success-faded',
        timestamp: '05/17/2024 01:35 PM',
        title: 'Service Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        showFooter: true,
        footerText: 'Warning by Iva Ryan'
    }
};

export const WithoutTimestamp: Story = {
    args: {
        badge: 'Active',
        badgeVariant: 'success-faded',
        timestamp: '',
        title: 'Service Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        showFooter: true,
        footerText: 'Warning by Iva Ryan'
    }
};

export const WithoutFooter: Story = {
    args: {
        badge: 'Active',
        badgeVariant: 'success-faded',
        timestamp: '05/17/2024 01:35 PM',
        title: 'Service Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        showFooter: false,
        footerText: ''
    }
};

export const Warning: Story = {
    args: {
        badge: 'Warning',
        badgeVariant: 'warning-faded',
        timestamp: '05/17/2024 01:35 PM',
        title: 'System Alert',
        description: 'There is a potential issue that requires your attention.',
        showFooter: true,
        footerText: 'Reported by System'
    }
};

export const Danger: Story = {
    args: {
        badge: 'Critical',
        badgeVariant: 'danger-faded',
        timestamp: '05/17/2024 01:35 PM',
        title: 'Critical Error',
        description: 'An urgent issue has been detected and needs immediate action.',
        showFooter: true,
        footerText: 'Alert by Security Team'
    }
};
