import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  private icons = new Map<string, string>();

  constructor(private sanitizer: DomSanitizer) { }

  addIcon(name: string, svgContent: string): void {
    this.icons.set(name, svgContent);
  }

  // Helper to register default icons for the demo
  registerDefaultIcons(): void {
    this.addIcon('placeholder', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>');
    this.addIcon('check', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>');
    this.addIcon('videocam', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 10l5-4v12l-5-4v3H4V7h11v3z"/></svg>');
    this.addIcon('walk', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 4a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm-2 3c-1.1 0-2 .9-2 2v5h2v7h2v-7h2v-5h-4z"/></svg>'); // Simple walk proxy
    this.addIcon('people-add', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>');

    // Icons identified in Figma (TODO: Replace empty strings with actual SVG content)
    // Batch 1

    this.addIcon('shield-checkmark', '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>');
    this.addIcon('send', '');
    this.addIcon('save', '');
    this.addIcon('return-down-forward', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>');
    this.addIcon('recording', '');
    this.addIcon('power', '');
    this.addIcon('person-add', '');
    this.addIcon('pause', '');
    this.addIcon('notifications-off-circle', '');
    this.addIcon('man', '');
    this.addIcon('list', '');
    this.addIcon('images', '');
    this.addIcon('help-buoy', '');
    this.addIcon('golf', '');
    this.addIcon('headset', '');
    this.addIcon('eyedrop', '');
    this.addIcon('ban', '');
    this.addIcon('pint', '');
    this.addIcon('git-commit', '');
    this.addIcon('folder-open', '');
    this.addIcon('document', '');
    this.addIcon('ellipsis-vertical', '');
    this.addIcon('cloud-done', '');
    this.addIcon('woman', '');
    this.addIcon('code-download', '');
    this.addIcon('flame', '');
    this.addIcon('color-wand', '');
    this.addIcon('play-forward', '');
    this.addIcon('alert-circle', '');
    this.addIcon('caret-up', '');
    this.addIcon('today', '');
    this.addIcon('thermometer', '');
    this.addIcon('chatbubble', '');
    this.addIcon('qr-code', '');
    this.addIcon('crop', '');
    this.addIcon('external-link', '');
    this.addIcon('build', '');
    this.addIcon('speedometer', '');
    this.addIcon('chevron-up', '');

    // Batch 2
    this.addIcon('reorder-four', '');
    this.addIcon('keypad', '');
    this.addIcon('arrow-back-circle', '');
    this.addIcon('arrow-undo', '');
    this.addIcon('bookmark', '');
    this.addIcon('musical-notes', '');
    this.addIcon('mic', '');
    this.addIcon('beer', '');
    this.addIcon('basketball', '');
    this.addIcon('ear', '');
    this.addIcon('accessibility', '');
    this.addIcon('trending-down', '');
    this.addIcon('checkmark-done-circle', '');
    this.addIcon('film', '');
    this.addIcon('stopwatch', '');
    this.addIcon('calendar-clear', '');
    this.addIcon('backspace', '');
    this.addIcon('sync-circle', '');
    this.addIcon('card', '');
    this.addIcon('add', '');
    this.addIcon('american-football', '');
    this.addIcon('arrow-down', '');
    this.addIcon('arrow-undo-circle', '');
    this.addIcon('bag', '');
    this.addIcon('bandage', '');
    this.addIcon('battery-charging', '');
    this.addIcon('bicycle', '');
    this.addIcon('bookmarks', '');
    this.addIcon('bulb', '');
    this.addIcon('calendar-number', '');
    this.addIcon('caret-back', '');
    this.addIcon('caret-up-circle', '');
    this.addIcon('chatbubble-ellipses', '');
    this.addIcon('chevron-back', '');
    this.addIcon('chevron-up-circle', '');
    this.addIcon('cloud-download', '');
    this.addIcon('code-slash', '');
    this.addIcon('compass', '');
    this.addIcon('cube', '');
    this.addIcon('document-attach', '');
    this.addIcon('earth', '');
    this.addIcon('ellipsis-vertical-circle', '');

    // Batch 3
    this.addIcon('eye-off', '');
    this.addIcon('filter', '');
    this.addIcon('flash-off', '');
    this.addIcon('football', '');
    this.addIcon('git-compare', '');
    this.addIcon('grid', '');
    this.addIcon('heart', '');
    this.addIcon('help-circle', '');
    this.addIcon('infinite', '');
    this.addIcon('language', '');
    this.addIcon('list-circle', '');
    this.addIcon('magnet', '');
    this.addIcon('map', '');
    this.addIcon('mic-circle', '');
    this.addIcon('navigate', '');
    this.addIcon('nuclear', '');
    this.addIcon('pause-circle', '');
    this.addIcon('person-circle', '');
    this.addIcon('pizza', '');
    this.addIcon('play-forward-circle', '');
    this.addIcon('pricetag', '');
    this.addIcon('radio', '');
    this.addIcon('refresh', '');
    this.addIcon('reorder-three', '');
    this.addIcon('return-up-back', '');
    this.addIcon('scale', '');
    this.addIcon('server', '');
    this.addIcon('shield-half', '');
    this.addIcon('square', '');
    this.addIcon('storefront', '');
    this.addIcon('tablet-landscape', '');
    this.addIcon('thumbs-down', '');
    this.addIcon('toggle', '');
    this.addIcon('trending-up', '');
    this.addIcon('videocam-off', '');
    this.addIcon('wallet', '');
    this.addIcon('add-circle', '');
    this.addIcon('analytics', '');
    this.addIcon('arrow-down-circle', '');
    this.addIcon('arrow-up', '');
    this.addIcon('bag-add', '');
    this.addIcon('barbell', '');

    // Batch 4
    this.addIcon('battery-dead', '');
    this.addIcon('bluetooth', '');
    this.addIcon('bowling-ball', '');
    this.addIcon('bus', '');
    this.addIcon('call', '');
    this.addIcon('caret-back-circle', '');
    this.addIcon('chatbubbles', '');
    this.addIcon('chevron-back-circle', '');
    this.addIcon('clipboard', '');
    this.addIcon('cloud-offline', '');
    this.addIcon('code-working', '');
    this.addIcon('construct', '');
    this.addIcon('cut', '');
    this.addIcon('document-lock', '');
    this.addIcon('easel', '');
    this.addIcon('enter', '');
    this.addIcon('fast-food', '');
    this.addIcon('filter-circle', '');
    this.addIcon('flash', '');
    this.addIcon('footsteps', '');
    this.addIcon('git-merge', '');
    this.addIcon('hammer', '');
    this.addIcon('heart-circle', '');
    this.addIcon('home', '');
    this.addIcon('information', '');
    this.addIcon('laptop', '');
    this.addIcon('locate', '');
    this.addIcon('mail', '');
    this.addIcon('medal', '');
    this.addIcon('mic-off', '');
    this.addIcon('navigate-circle', '');
    this.addIcon('nutrition', '');
    this.addIcon('paw', '');
    this.addIcon('person-remove', '');
    this.addIcon('planet', '');
    this.addIcon('play-skip-back', '');
    this.addIcon('pricetags', '');
    this.addIcon('radio-button-off', '');
    this.addIcon('refresh-circle', '');
    this.addIcon('reorder-two', '');
    this.addIcon('return-up-forward', '');

    // Batch 5
    this.addIcon('scan', '');
    this.addIcon('settings', '');
    this.addIcon('shirt', '');
    this.addIcon('star', '');
    this.addIcon('subway', '');
    this.addIcon('tablet-portrait', '');
    this.addIcon('thumbs-up', '');
    this.addIcon('trail-sign', '');
    this.addIcon('triangle', '');
    this.addIcon('volume-high', '');
    this.addIcon('warning', '');
    this.addIcon('airplane', '');
    this.addIcon('aperture', '');
    this.addIcon('arrow-forward', '');
    this.addIcon('arrow-up-circle', '');
    this.addIcon('bag-check', '');
    this.addIcon('bar-chart', '');
    this.addIcon('battery-full', '');
    this.addIcon('boat', '');
    this.addIcon('briefcase', '');
    this.addIcon('business', '');
    this.addIcon('camera', '');
    this.addIcon('caret-down', '');
    this.addIcon('cash', '');
    this.addIcon('checkbox', '');
    this.addIcon('chevron-down', '');
    this.addIcon('close', '');
    this.addIcon('cloud-upload', '');
    this.addIcon('cog', '');
    this.addIcon('contract', '');
    this.addIcon('desktop', '');
    this.addIcon('document-text', '');
    this.addIcon('egg', '');
    this.addIcon('exit', '');
    this.addIcon('female', '');
    this.addIcon('finger-print', '');
    this.addIcon('flashlight', '');
    this.addIcon('funnel', '');
    this.addIcon('git-network', '');
    this.addIcon('hand-left', '');
    this.addIcon('heart-dislike', '');
    this.addIcon('hourglass', '');

    // Batch 6
    this.addIcon('information-circle', '');
    this.addIcon('layers', '');
    this.addIcon('location', '');
    this.addIcon('mail-open', '');
    this.addIcon('medical', '');
    this.addIcon('mic-off-circle', '');
    this.addIcon('newspaper', '');
    this.addIcon('open', '');
    this.addIcon('pencil', '');
    this.addIcon('phone-landscape', '');
    this.addIcon('play', '');
    this.addIcon('play-skip-back-circle', '');
    this.addIcon('print', '');
    this.addIcon('radio-button-on', '');
    this.addIcon('reload', '');
    this.addIcon('repeat', '');
    this.addIcon('ribbon', '');
    this.addIcon('scan-circle', '');
    this.addIcon('shapes', '');
    this.addIcon('shuffle', '');
    this.addIcon('star-half', '');
    this.addIcon('sunny', '');
    this.addIcon('telescope', '');
    this.addIcon('thunderstorm', '');
    this.addIcon('train', '');
    this.addIcon('trophy', '');
    this.addIcon('volume-low', '');
    this.addIcon('watch', '');
    this.addIcon('alarm', '');
    this.addIcon('apps', '');
    this.addIcon('arrow-forward-circle', '');
    this.addIcon('at', '');
    this.addIcon('bag-handle', '');
    this.addIcon('barcode', '');
    this.addIcon('battery-half', '');
    this.addIcon('body', '');
    this.addIcon('browsers', '');
    this.addIcon('cafe', '');
    this.addIcon('camera-reverse', '');
    this.addIcon('caret-down-circle', '');
    this.addIcon('cellular', '');
    this.addIcon('checkmark', '');

    // Batch 7
    this.addIcon('chevron-down-circle', '');
    this.addIcon('close-circle', '');
    this.addIcon('cloudy', '');
    this.addIcon('color-fill', '');
    this.addIcon('contrast', '');
    this.addIcon('diamond', '');
    this.addIcon('documents', '');
    this.addIcon('ellipse', '');
    this.addIcon('expand', '');
    this.addIcon('file-tray', '');
    this.addIcon('fish', '');
    this.addIcon('flask', '');
    this.addIcon('game-controller', '');
    this.addIcon('git-pull-request', '');
    this.addIcon('hand-right', '');
    this.addIcon('heart-dislike-circle', '');
    this.addIcon('ice-cream', '');
    this.addIcon('invert-mode', '');
    this.addIcon('leaf', '');
    this.addIcon('lock-closed', '');
    this.addIcon('mail-unread', '');
    this.addIcon('medkit', '');
    this.addIcon('moon', '');
    this.addIcon('notifications', '');
    this.addIcon('options', '');
    this.addIcon('people', '');
    this.addIcon('phone-portrait', '');
    this.addIcon('play-back', '');
    this.addIcon('play-skip-forward', '');
    this.addIcon('prism', '');
    this.addIcon('rainy', '');
    this.addIcon('reload-circle', '');
    this.addIcon('resize', '');
    this.addIcon('rocket', '');
    this.addIcon('school', '');
    this.addIcon('share', '');
    this.addIcon('skull', '');
    this.addIcon('stats-chart', '');
    this.addIcon('swap-horizontal', '');
    this.addIcon('tennisball', '');
    this.addIcon('ticket', '');
    this.addIcon('transgender', '');

    // Batch 8
    this.addIcon('tv', '');
    this.addIcon('volume-medium', '');
    this.addIcon('water', '');
    this.addIcon('albums', '');
    this.addIcon('archive', '');
    this.addIcon('arrow-redo', '');
    this.addIcon('at-circle', '');
    this.addIcon('bag-remove', '');
    this.addIcon('baseball', '');
    this.addIcon('beaker', '');
    this.addIcon('bonfire', '');
    this.addIcon('brush', '');
    this.addIcon('calculator', '');
    this.addIcon('car', '');
    this.addIcon('caret-forward', '');
    this.addIcon('chatbox', '');
    this.addIcon('checkmark-circle', '');
    this.addIcon('checkmark-filled', '');
    this.addIcon('chevron-forward', '');
    this.addIcon('cloud', '');
    this.addIcon('cloudy-night', '');
    this.addIcon('color-filter', '');
    this.addIcon('copy', '');
    this.addIcon('dice', '');
    this.addIcon('download', '');
    this.addIcon('ellipsis-horizontal', '');
    this.addIcon('extension-puzzle', '');
    this.addIcon('file-tray-full', '');
    this.addIcon('fitness', '');
    this.addIcon('flower', '');
    this.addIcon('gift', '');
    this.addIcon('glasses', '');
    this.addIcon('happy', '');
    this.addIcon('heart-half', '');
    this.addIcon('id-card', '');
    this.addIcon('journal', '');
    this.addIcon('library', '');
    this.addIcon('lock-open', '');
    this.addIcon('male', '');
    this.addIcon('megaphone', '');
    this.addIcon('move', '');
    // notifications-circle already in batch 1
    this.addIcon('paper-plane', '');
    // people-circle already in batch 3
    this.addIcon('pie-chart', '');
    this.addIcon('play-back-circle', '');
    this.addIcon('play-skip-forward-circle', '');
    this.addIcon('pulse', '');
    this.addIcon('reader', '');
    this.addIcon('remove', '');
    this.addIcon('restaurant', '');
    this.addIcon('rose', '');
    this.addIcon('search', '');
    this.addIcon('share-social', '');

    // Batch 9
    this.addIcon('snow', '');
    this.addIcon('stop', '');
    this.addIcon('swap-vertical', '');
    this.addIcon('terminal', '');
    this.addIcon('time', '');
    this.addIcon('trash', '');
    this.addIcon('umbrella', '');
    this.addIcon('volume-mute', '');
    this.addIcon('wifi', '');
    this.addIcon('alert', '');
    this.addIcon('arrow-back', '');
    this.addIcon('arrow-redo-circle', '');
    this.addIcon('attach', '');
    this.addIcon('balloon', '');
    this.addIcon('basket', '');
    this.addIcon('bed', '');
    this.addIcon('book', '');
    this.addIcon('bug', '');
    this.addIcon('calendar', '');
    this.addIcon('car-sport', '');
    this.addIcon('caret-forward-circle', '');
    // chatbox-ellipses already in batch 2
    // checkmark-done already in batch 2
    this.addIcon('chevron-forward-circle', '');
    this.addIcon('cloud-circle', '');
    this.addIcon('code', '');
    this.addIcon('color-palette', '');
    this.addIcon('create', '');
    this.addIcon('disc', '');
    this.addIcon('duplicate', '');
    this.addIcon('ellipsis-horizontal-circle', '');
    this.addIcon('eye', '');
    this.addIcon('file-tray-stacked', '');
    this.addIcon('flag', '');
    this.addIcon('folder', '');
    this.addIcon('git-branch', '');
    this.addIcon('globe', '');
    this.addIcon('hardware-chip', '');
    this.addIcon('help', '');
    this.addIcon('image', '');
    this.addIcon('key', '');
    this.addIcon('link', '');
    this.addIcon('log-in', '');
    this.addIcon('male-female', '');
    this.addIcon('menu', '');
    this.addIcon('musical-note', '');
    // notifications-off already in batch 1 (as notifications-off-circle? Checking... image says notifications-off)
    this.addIcon('notifications-off', ''); // Adding just in case
    this.addIcon('partly-sunny', '');
    this.addIcon('person', '');
    this.addIcon('pin', '');
    this.addIcon('play-circle', '');
    this.addIcon('podium', '');
    this.addIcon('push', '');
    this.addIcon('receipt', '');

    // Batch 10
    this.addIcon('remove-circle', '');
    this.addIcon('return-down-back', '');
    this.addIcon('sad', '');
    this.addIcon('search-circle', '');
    this.addIcon('shield', '');
    this.addIcon('sparkles', '');
    this.addIcon('stop-circle', '');
    this.addIcon('sync', '');
    this.addIcon('text', '');
    this.addIcon('timer', '');
    // the rest are duplicates from batch 1, safe to ignore or re-add

  }

  getIcon(name: string): SafeHtml | undefined {
    const content = this.icons.get(name);
    return content ? this.sanitizer.bypassSecurityTrustHtml(content) : undefined;
  }
}
