import React from 'react'
import injectSheet from 'react-jss'

const Article = ({ classes, title, author, link }) => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <a
        className={classes.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>{' '}
      <span className={classes.author}>by {author}</span>
    </div>
  </div>
)

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily:
      "Inter UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important",
    letterSpacing: '.35px',
    fontSize: '18px',
    paddingBottom: '14px',
    lineHeight: '1.5',

    '@media (min-width: 600px)': {
      fontSize: '21px',
      paddingBottom: '18px',
    },
  },
  link: {
    color: '#414141',
    fontWeight: '600',
    textDecoration: 'none',
    borderBottom: '2px solid #bcd9ff',

    '&:hover': {
      transition: '250ms all',
      background: '#bcd9ff',
    },
  },
  author: {
    color: '#606571',
  },
}

export default injectSheet(styles)(Article)
