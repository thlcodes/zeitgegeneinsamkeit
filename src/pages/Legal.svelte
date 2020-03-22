<script>
  import { onMount } from "svelte";
  import regStore from "../stores/registration";
  import { navigate } from "svelte-routing";
  import Button from "@smui/button";
  import { Link } from "svelte-routing";

  import * as consts from "../constants";

  let userType;
  regStore.subscribe(r => {
    userType = r.userType;
  });

  onMount(() => {
    userType === "" && navigate("/", { replace: true });
  });
</script>

Legal (für {consts.REGTYPE_MAP[userType]})
<pre>
  Ipsum pariatur nulla velit nostrud mollit sit sit irure laboris. Cillum
  ullamco amet amet veniam proident. Eiusmod Lorem incididunt tempor consequat
  anim laborum dolore consectetur. Aliquip Lorem deserunt incididunt do anim.
  Occaecat consectetur sit magna cupidatat irure aute ad irure. Laboris irure
  eiusmod deserunt ullamco esse aliqua qui laborum mollit adipisicing tempor
  sunt. Adipisicing labore culpa officia nulla elit veniam amet adipisicing
  deserunt eiusmod incididunt et fugiat. Reprehenderit velit ut officia mollit
  minim qui veniam sit ullamco tempor reprehenderit sunt. Veniam duis sit
  proident duis. Eiusmod in culpa in exercitation consectetur ea. In anim do
  consequat velit in non culpa. Officia id sit aliqua sunt est duis. Ipsum aute
  cillum ullamco culpa. Incididunt ipsum exercitation esse consequat ad ipsum
  sunt elit. Nulla do pariatur qui ullamco quis mollit. Officia Lorem enim
  deserunt esse ut laboris adipisicing tempor officia mollit. In exercitation
  ipsum laborum nisi ex elit esse. Lorem officia proident laborum id ut enim
  commodo do. Occaecat irure enim ea est non aliqua amet aliquip occaecat dolore
  velit proident ut nisi. Culpa occaecat duis culpa adipisicing culpa
  reprehenderit amet enim duis esse Lorem. Qui est minim ad cupidatat cillum.
  Irure proident in occaecat sunt sit sunt aliqua laborum incididunt fugiat.
  Quis proident enim ut ea qui voluptate nostrud dolore est laboris sunt. Veniam
  minim mollit sunt pariatur eiusmod. Eiusmod amet Lorem magna do amet. Sit est
  sint fugiat aute incididunt nisi duis. Commodo ipsum labore sit ea ut veniam
  laborum sit fugiat nisi duis duis. Do consectetur irure excepteur eu nisi
  nisi. Dolor commodo sint voluptate minim occaecat in Lorem eiusmod consectetur
  in excepteur. Ad aliqua veniam sit deserunt excepteur duis cupidatat enim
  proident nostrud cillum velit nulla commodo. Sunt qui exercitation occaecat
  dolore labore id id qui adipisicing aliqua eiusmod voluptate magna proident.
  Ex elit commodo voluptate commodo qui do amet irure cupidatat esse eiusmod
  tempor proident. Id qui pariatur amet sunt aute nostrud officia pariatur dolor
  labore commodo. Non veniam id culpa pariatur minim anim pariatur duis aliquip
  labore eiusmod irure. Amet dolor velit ullamco ut reprehenderit proident
  voluptate et Lorem ad laboris proident. Labore adipisicing enim do proident eu
  fugiat tempor occaecat voluptate nulla consequat culpa. Cupidatat ex eiusmod
  proident ipsum amet. Commodo sit duis sint qui excepteur officia. magna sunt.
</pre>

<Button enabled={false}>
  <Link to={consts.PAGE_CREATEPROFILE}>Akzeptieren</Link>
</Button>
