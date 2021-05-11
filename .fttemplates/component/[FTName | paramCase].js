import * as React from 'react';
// style
import useStyle from './[FTName | paramCase].style'
// localiztion
import t from './[FTName | paramCase].local'

export default function <FTName | pascalcase>(props) {
  const classes = useStyle()

  return <div className={classes.root}>{t.name}</div>
}
