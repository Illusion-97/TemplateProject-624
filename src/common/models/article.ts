import {MiniPost} from "../../components/sidebar/sidebar.component";

export interface Article extends MiniPost {
  id: number
  titre: string
}
