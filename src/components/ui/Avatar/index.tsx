'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, FC } from 'react';

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn('relative flex shrink-0 overflow-hidden', className)}
    {...props}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center bg-surface-light-satin text-obsidian text-[13px]/[13px]',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type AvatarSize = 'xs' | 'sm' | 'xl';

type AvatarProps = {
  src?: string;
  size?: AvatarSize;
  fallbackText?: string;
  rootClassName?: string;
  imageClassName?: string;
  fallbackClassName?: string;
  imageProps?: ComponentPropsWithoutRef<'img'>;
};

export const Avatar: FC<AvatarProps> = ({
  src,
  size = 'sm',
  fallbackText,
  rootClassName = '',
  imageClassName = '',
  fallbackClassName = '',
  imageProps,
}) => {
  const getSizeClass = (size: AvatarSize) => {
    switch (size) {
      case 'xs':
        return 'size-8 rounded-sm';
      case 'sm':
        return 'size-10 rounded-md';
      case 'xl':
        return 'size-12 rounded-md';
    }
  };

  const sizeClass = getSizeClass(size);

  return (
    <AvatarRoot className={cn(sizeClass, rootClassName)}>
      <AvatarImage
        src={src}
        className={imageClassName}
        {...imageProps}
        alt={imageProps?.alt || 'Avatar'}
      />
      <AvatarFallback className={cn(sizeClass, fallbackClassName)}>
        {fallbackText}
      </AvatarFallback>
    </AvatarRoot>
  );
};

