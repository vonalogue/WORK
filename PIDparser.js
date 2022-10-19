/*** PID PARSER FOR HL7 ***/


// Returns Map object containing fields. Takes PID segment as string argument.
function parsePID() 
{	
	const segment = PIDfromArg();
	const keys = [			"MPI",
							"MRN",
							"Name",
							"DOB",
							"Sex",
							"Race",
							"Address",
							"Country",
							"Phone (home)",
							"Phone (work)",
							"Language",
							"Marital status",
							"Religion",
							"Account number",
							"SSN",
							"Ethnic group",
							"Birthplace" 
					];
	const vals = segment.split("|").slice(2);	
	const totalFields = keys.length;
	var fields = new Map();
		
	addFieldProps();
	
	// Requires one CLI argument: filename (w/ txt extension) or PID itself
	function PIDfromArg() 		
	{
		const args = process.argv;	
		
		// check if arg exists
		if (!args[2]) {								
			console.log("Missing argument:\n\t[filename].txt OR [PID string literal]");
			return;
		}		
		
		const arg = args[2]; 

		if (/^PID|.$/.match(PID)) {
			
		}
		
		// check if arg is filename w/ txt extension
		if (/^.*\.txt$/.match(arg)) {				
			let reader = newFileReader();
			let text = reader.readAsText().result;		
			
			if (/^\nPID|.$/.match(text) { 
				console.log("PID FOUND!");
			} else {
				 {
					
				}
		
		}
		return PID;
	}
	
	// Add names and respective values to fields map; output them as you go.
	function addFieldProps() 	
	{		
		for (let x=0; x < totalFields; x++) {	
			let name = keys[x];
			let value = vals[x];			
			
			if (name ===  "Account number" && !value) {
				console.log("DANGER! MISSING ACCOUNT NUMBER");
				break;
			}	
			fields[name] = value;
			console.log(name + ": " + value );
		}						// end for	
		return;		
	} 							// end addFieldProps	
	return fields;
}								// end parsePID

parsePID();


/* PID STRINGS TO TEST

	"PID|1|MPI20130516|MRN20130516|4947761|SMITH^HAPPY||19811008|M||UNK|4000 ELM STREET^\"\"^GOTHAM CITY^NY^921231800^^^^001|001|(123)445-8585^^PH||ENG|M||ACCT20130516|000000001|||UNK|CA"
*/