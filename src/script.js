/*jshint esversion: 6 */

class JSONHelper {
    static loadJSON(path, success, error) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success) {
                        success(JSON.parse(xhr.responseText));
                    }
                } else {
                    if (error) {
                        error(xhr);
                    }
                }
            }
        };
        xhr.open('GET', path, true);
        xhr.send();
    }
}

let okapi_base_url = 'http://opencaching.pl/okapi/';
let consumer_key = 'kFSSkjyYN4mZMduVVcU2';
let username = 'pooler22';
let lat = 54.3;
let lon = 22.3;

JSONHelper.loadJSON(okapi_base_url + 'services/users/by_username?username=' + username + '&fields=uuid&consumer_key=' + consumer_key, (json) => {
    console.log('json', json.uuid);

    JSONHelper.loadJSON(okapi_base_url + 'services/caches/search/nearest?center=' + lat + '|' + lon + '&not_found_by=' + json.uuid + '&limit=5&consumer_key=' + consumer_key, (json) => {
        console.log('Five nearest unfound caches: ', json.results);
    }, (xhr) => {
        console.error('ERROR!');
        console.error(xhr);
    });
}, (xhr) => {
    console.error('ERROR! Check your consumer_key and/or username!');
    console.error(xhr);
});
