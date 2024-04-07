import { SectionProps } from './Section.props'

import cn from 'classnames'
import styles from './Section.module.css'
import { Title } from '@/UI'
import React from 'react'

export const Section: React.FC<SectionProps> = ({
  title,
  className,
  children
}) => {
  return (
    <section className={cn(styles.section, className)}>
      {title && <Title title={title} />}
      {children}
    </section>
  )
}
