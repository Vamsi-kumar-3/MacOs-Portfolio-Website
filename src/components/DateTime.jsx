import React from 'react'

const DateTime = () => {
  const dateTimeParts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(new Date())
  const getPart = (type) => dateTimeParts.find((part) => part.type === type)?.value

  const formattedDateTime = `${getPart('weekday').toLowerCase()} ${getPart('month').toLowerCase()} ${getPart('day')} ${getPart('hour')}:${getPart('minute')} ${getPart('dayPeriod')}`

  return (
    <div>
      {formattedDateTime}
    </div>
  )
}

export default DateTime
