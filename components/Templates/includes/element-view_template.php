<?php
/**
 * Frontier Template code editor metabox
 */
?>
<div class="pods-compat-container">
	<textarea id="content" name="content">
		<?php if ( isset( $content ) ) {
			// WordPress will already call esc_textarea() if richedit is off, don't escape twice (see #3462)
			if ( ! user_can_richedit() ) {
				echo $content;
			} else {
				echo esc_textarea( $content );
			}
		} ?>
	</textarea>
</div>
