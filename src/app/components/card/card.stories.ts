import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardFooterComponent } from './card-footer.component';
import { CardSectionComponent } from './card-section.component';
import { BadgeComponent } from '../badge/badge.component';
import { IconComponent } from '../icon/icon.component';

const meta: Meta<CardComponent> = {
    title: 'Components/Card',
    component: CardComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                CardHeaderComponent,
                CardFooterComponent,
                CardSectionComponent,
                BadgeComponent,
                IconComponent
            ],
        }),
    ],
    render: (args) => ({
        props: args,
        template: `
      <card>
        <card-header>
          <badge variant="success">Active</badge>
          <div>Service Plan</div>
          <div slot="end" class="text-xs">Today</div>
        </card-header>
        
        <card-section>
          <p>Main content of the card goes here. This is a section.</p>
        </card-section>

        <card-footer>
          <button style="padding: 8px 16px; border-radius: 6px; border: 1px solid #ccc; background: white;">Action</button>
        </card-footer>
      </card>
    `,
    }),
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {};

export const Simple: Story = {
    render: (args) => ({
        props: args,
        template: `
      <card>
        <card-header>
          <div>Simple Card</div>
        </card-header>
        <div style="padding: 16px;">
          Just some simple content without sections.
        </div>
      </card>
    `,
    }),
};
