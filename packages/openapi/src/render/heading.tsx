import type { ReactNode } from 'react';
import { Heading } from 'fumadocs-ui/components/heading';
import type { RenderContext } from '@/types';

export function heading(
  depth: number,
  child: string,
  ctx: RenderContext,
): ReactNode {
  const id = ctx.slugger.slug(child);
  ctx.toc.push({
    depth,
    url: `#${id}`,
    title: child,
  });
  ctx.structuredData.headings.push({
    id,
    content: child,
  });

  return (
    <Heading id={id} key={id} as={`h${depth.toString()}` as `h1`}>
      {child.trim()}
    </Heading>
  );
}
