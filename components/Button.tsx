import { Ionicons } from '@expo/vector-icons';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
  title?: string;
  isLoading?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: 'sm' | 'md' | 'lg' | 'full';
  variant?: 'solid' | 'outline' | 'ghost';
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
} & React.ComponentProps<typeof TouchableOpacity>;

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      title,
      isLoading = false,
      icon,
      size = 'md',
      variant = 'solid',
      bgColor = 'bg-indigo-500',
      textColor = 'text-white',
      iconColor = 'white',
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...props}
        className={clsx(
          'items-center rounded-md p-4 active:opacity-90',
          {
            'w-22 text-sm': size === 'sm',
            'w-28 text-base': size === 'md',
            'w-80 text-base': size === 'lg',
            'w-full text-lg': size === 'full',
          },
          {
            'border border-transparent': variant === 'solid',
            'border border-indigo-500 bg-transparent': variant === 'outline',
            'bg-transparent': variant === 'ghost',
          },
          disabled ? 'opacity-50' : bgColor,
          className
        )}
        disabled={disabled || isLoading}
        accessibilityRole="button">
        {isLoading ? (
          <ActivityIndicator color={iconColor} className="scale-75" />
        ) : (
          <View className="flex flex-row items-center gap-2">
            {icon && <Ionicons name={icon} size={22} color={iconColor} />}
            {title && <Text className={clsx('font-bold', textColor)}>{title}</Text>}
          </View>
        )}
      </TouchableOpacity>
    );
  }
);
