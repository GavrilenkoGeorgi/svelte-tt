<script>
  import { firstNum } from '../stores/firstStore'

  const handleUpdate = (num) => {
    $firstNum = num
  }

</script>

<input
  type='number'
  name='firstNum'
  id='firstNum'
  min='0'
  max='10'
  on:change={(e) => handleUpdate(e.currentTarget.value)}
/>

<p>current value {$firstNum}</p>
