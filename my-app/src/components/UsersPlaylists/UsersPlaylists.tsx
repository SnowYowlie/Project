import { useLoaderData } from "react-router-dom"
import LinkItem from "../base/LinkItem"
import { FlexContainer } from "../styled/FlexContainer"
import './UsersPlaylists.scss';

const UsersPlayLists = () => {
  const { items : list }: any = useLoaderData()
  
  return (
    <div className="playlists__wrapper">
      <FlexContainer direction="column" align="flex-start" gap="1rem">
        {
          list.map((item: any) => <LinkItem url={`playlist/${item.id}`} key={item.id}>{item.name}</LinkItem>)
        }
      </FlexContainer>
    </div>
  )
}

export default UsersPlayLists;