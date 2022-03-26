import { StarProps } from './Star.props'
import styles from './Star.module.scss'
import cn from 'classnames'
import StarIcon from './Star.svg'
import { useState } from 'react'

export const Star = ({
  isChosen = false,
  setIsChosen,
  ...props
}: StarProps): JSX.Element => {
  const [isChosenStar, setIsChosenStar] = useState<boolean>(isChosen)

  return (
    <div {...props}>
      <StarIcon
        onClick={() => setIsChosenStar(x => !x)}
        className={cn(styles.star, {
          [styles.starChosen]: isChosenStar
        })}
      />
    </div>
  )
}
