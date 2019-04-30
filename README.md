# accordeon-jquery
Create a accordeon effect on a list

<h2>How to Use</h2>

Create an HTML structure like this for your accordeon list:

<pre>
	<code>
			&lt;div&gt;
		  	&lt;div&gt;
		    	&lt;div&gt; TITRE 1	&lt;/div&gt;
		    	&lt;div&gt; Content 1	&lt;/div&gt;
		  	&lt;/div&gt;
		  	&lt;div&gt;
		    	&lt;div&gt; TITRE 2	&lt;/div&gt;
		    	&lt;div&gt; Content 2	&lt;/div&gt;
		  	&lt;/div&gt;
			&lt;/div&gt;
	</code>
</pre>

then activate the accordeon in JS :

<pre>
	<code>

	<script>
		$(document).ready(function(){
			// Init Accordeon Jquery
			accordeonJquery(".accordeon");
			accordeonJquery(".accordeon2", true);
			accordeonJquery(".accordeon3", true);
		});
	</script>
	</code>
</pre>

See exemple.html for more information

<h2>Contribute / Contact</h2>

Feel free to send pull requests, this plugin is still used in production in a lot of my projects.
You can contact me on github
