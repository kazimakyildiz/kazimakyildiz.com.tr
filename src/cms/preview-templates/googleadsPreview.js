import React from 'react'
import PropTypes from 'prop-types'
import { google-adsTemplate } from '../../templates/google-ads'

function googleadsPreview({ entry, widgetFor }) {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <google-adsTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])} />
  )
}

googleadsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default googleadsPreview
