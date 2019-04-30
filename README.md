# accordeon-jquery
Create an accordeon effect on a list

demo : <a href="http://www.aliarteo.com/accordeon-jquery/exemple.html" target="_blank">http://www.aliarteo.com/accordeon-jquery/exemple.html</a>

<h2>How to Use</h2>

Add JS files:
Jquery, accordeonJquery and scrolltoID

<pre>
	<code>

	&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"&gt;&lt;/script&gt;
	&lt;script src="scrolltoid.js"&gt;&lt;/script&gt;
	&lt;script src="accordeon-jquery.js"&gt;&lt;/script&gt;
	</code>
</pre>

Create an HTML structure like this for your accordeon list:
use any HTML Tag you want.
just respect tihe structure:

<pre>
	<code>
		&lt;div class="mylist" &gt;
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

or 

<pre>
	<code>
		&lt;ul class="mylist" &gt;
		  	&lt;li&gt;
		    		&lt;h3&gt; TITRE 1	&lt;/h3&gt;
		    		&lt;div&gt; Content 1	&lt;/div&gt;
		  	&lt;/li&gt;
		  	&lt;li&gt;
		    		&lt;h3&gt; TITRE 2	&lt;/h3&gt;
		    		&lt;div&gt; Content 2	&lt;/div&gt;
		  	&lt;/li&gt;
		&lt;/ul&gt;
	</code>
</pre>

then activate the accordeon in JS :

<pre>
	<code>

		&lt;script&gt;
			$(document).ready(function(){
				// Init Accordeon Jquery on a DOM target: ex .mylist
				accordeonJquery(".mylist");
			});
		&lt;/script&gt;
	
	</code>
</pre>

See exemple.html for more information

<h2>Contribute / Contact</h2>

Feel free to send pull requests, this plugin is still used in production in a lot of my projects.
You can contact me on github
