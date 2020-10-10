import { BulmaComponent } from '../../index';

interface MediaItemProps {
  position?: 'center' | 'right' | 'left';
}

export const Media: BulmaComponent<{}, 'article'> & {
  Item: BulmaComponent<MediaItemProps, 'div'>;
  Content: BulmaComponent<{}, 'div'>;
};