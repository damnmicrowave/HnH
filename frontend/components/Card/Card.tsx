import { CardProps } from './Card.props'
import styles from './Card.module.scss'
import { P } from '../P/P'
import { Tag } from '../Tag/Tag'
import { Star } from '../Star/Star'
import ArrowIcon from './Arrow.svg'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Thread } from '../../pages/app/types'

export const Card = ({
  object,
  variant,
  children
}: PropsWithChildren<CardProps>): JSX.Element => {
  return (
    <div className={styles.card}>
      <P tag="h1" className={styles.title}>
        {object.name}
      </P>
      <Star className={styles.star} />
      {/* {typeof object===Thread && <Tag className={styles.tag}>{object.topic}</Tag>} */}

      <P className={styles.info}>{children}</P>
      <Link href={`/${variant}/${object.id}`} passHref>
        <ArrowIcon className={styles.arrow} />
      </Link>
    </div>
  )
}
