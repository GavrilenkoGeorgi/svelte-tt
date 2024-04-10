<script>
  import { thirdNum } from '../stores/thirdStore'

  const handleUpdate = (num) => {
    $thirdNum = num
  }

</script>

<input
  type='number'
  name='thirdNum'
  id='thirdNum'
  min='0'
  max='10'
  on:change={(e) => handleUpdate(e.currentTarget.value)}
/>

<p>current value {$thirdNum}</p>
