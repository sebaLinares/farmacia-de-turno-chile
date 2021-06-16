import React from 'react'
import {
  FaLinkedin, FaTwitter, FaGithub, FaDev,
} from 'react-icons/fa'
import StyledLink from '../StyledComps/StyledLink'
import StyledSocialMediaBox from '../StyledComps/StyledSocialMediaBox'
import {
  twitter, linkedin, github, devto,
} from '../utils/globalConstants'

const twitterUrl = 'https://twitter.com/SLinaresL'
const githubUrl = 'https://github.com/sebaLinares'
const linkedinUrl = 'https://www.linkedin.com/in/sebastián-linares-linares-2054a622/'
const devToUrl = 'https://dev.to/sebalinares'

const SocialMediaBox = ({ socialMediaName }) => {
  const [url, setUrl] = React.useState('')
  const [icon, setIcon] = React.useState(null)

  React.useEffect(() => {
    const getSocialMediaUrl = (rrss) => {
      if (rrss === twitter) {
        setUrl(twitterUrl)
        setIcon(<FaTwitter className="w-full h-full" />)
        return
      }

      if (rrss === github) {
        setUrl(githubUrl)
        setIcon(<FaGithub className="w-full h-full" />)
        return
      }

      if (rrss === devto) {
        setUrl(devToUrl)
        setIcon(<FaDev className="w-full h-full" />)
        return
      }

      if (rrss === linkedin) {
        setUrl(linkedinUrl)
        setIcon(<FaLinkedin className="w-full h-full" />)
      }
    }

    getSocialMediaUrl(socialMediaName)
  }, [])

  return (
    <StyledLink target="_blank" href={url}>
      <StyledSocialMediaBox>{icon}</StyledSocialMediaBox>
    </StyledLink>
  )
}

export default SocialMediaBox
